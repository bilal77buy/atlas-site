"""Application configuration loaded from environment variables."""

from __future__ import annotations

from pathlib import Path
from typing import Literal

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parents[3]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    app_name: str = "CyberProspect Agent"
    app_version: str = "1.0.0"
    debug: bool = False
    log_level: str = "INFO"

    database_url: str = f"sqlite:///{BASE_DIR}/data/prospecting.db"

    llm_provider: Literal["anthropic", "openai"] = "anthropic"
    anthropic_api_key: str = ""
    openai_api_key: str = ""
    llm_model: str = "claude-sonnet-4-6"
    llm_temperature: float = 0.4
    llm_max_tokens: int = 2048

    serp_api_key: str = ""
    search_provider: Literal["duckduckgo", "serpapi"] = "duckduckgo"
    search_max_results: int = 10
    search_delay_seconds: float = 2.0

    http_timeout_seconds: int = 15
    http_max_retries: int = 3
    http_user_agent: str = (
        "Mozilla/5.0 (compatible; CyberProspectBot/1.0; +https://example.com/bot)"
    )

    score_threshold_high: int = 70
    score_threshold_medium: int = 45

    export_dir: Path = BASE_DIR / "data" / "exports"

    target_countries: list[str] = ["FR", "CH", "BE", "MA"]

    require_human_review: bool = True  # must always stay True


settings = Settings()
