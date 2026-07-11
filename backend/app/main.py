from fastapi import FastAPI
from app.api import auth

app = FastAPI(
    title="BattleVerse AI",
    version="1.0.0"
)

# Authentication Routes
app.include_router(auth.router)

# Home Route
@app.get("/")
def root():
    return {
        "message": "Welcome to BattleVerse AI Backend"
    }