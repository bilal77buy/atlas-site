from fastapi import APIRouter

from .leads import router as leads_router
from .discovery import router as discovery_router
from .enrichment import router as enrichment_router
from .messaging import router as messaging_router
from .review import router as review_router
from .export import router as export_router
from .ui import router as ui_router

api_router = APIRouter()

api_router.include_router(leads_router, prefix="/leads", tags=["leads"])
api_router.include_router(discovery_router, prefix="/discovery", tags=["discovery"])
api_router.include_router(enrichment_router, prefix="/enrichment", tags=["enrichment"])
api_router.include_router(messaging_router, prefix="/messaging", tags=["messaging"])
api_router.include_router(review_router, prefix="/review", tags=["review"])
api_router.include_router(export_router, prefix="/export", tags=["export"])
api_router.include_router(ui_router, tags=["ui"])
