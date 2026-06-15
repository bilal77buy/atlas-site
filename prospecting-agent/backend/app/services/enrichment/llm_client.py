"""Thin async wrapper around Anthropic Claude (primary) with OpenAI fallback."""
from __future__ import annotations

import json
from typing import Any, Optional
from loguru import logger

try:
    import anthropic
except ImportError:
    anthropic = None  # type: ignore

try:
    import openai
except ImportError:
    openai = None  # type: ignore

from app.core.config import settings


async def call_llm(
    system_prompt: str,
    user_prompt: str,
    max_tokens: int = 1024,
    temperature: float = 0.3,
) -> str:
    """
    Call LLM and return the text response.
    Tries Anthropic Claude first, falls back to OpenAI if configured.
    """
    if settings.anthropic_api_key and anthropic:
        return await _call_anthropic(system_prompt, user_prompt, max_tokens, temperature)
    elif settings.openai_api_key and openai:
        return await _call_openai(system_prompt, user_prompt, max_tokens, temperature)
    else:
        logger.warning("No LLM API key configured; returning placeholder")
        return "[LLM unavailable — configure ANTHROPIC_API_KEY or OPENAI_API_KEY]"


async def _call_anthropic(
    system_prompt: str,
    user_prompt: str,
    max_tokens: int,
    temperature: float,
) -> str:
    import asyncio

    client = anthropic.Anthropic(api_key=settings.anthropic_api_key)

    def _sync():
        response = client.messages.create(
            model=settings.llm_model,
            max_tokens=max_tokens,
            temperature=temperature,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
        )
        return response.content[0].text

    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync)


async def _call_openai(
    system_prompt: str,
    user_prompt: str,
    max_tokens: int,
    temperature: float,
) -> str:
    import asyncio

    client = openai.OpenAI(api_key=settings.openai_api_key)

    def _sync():
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            max_tokens=max_tokens,
            temperature=temperature,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )
        return response.choices[0].message.content or ""

    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _sync)
