from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.models import User

from app.schemas.user import (
    UserRegister,
    UserResponse,
    UserLogin,
    Token,
)

from app.services.auth_service import (
    register_user,
    login_user,
)

from app.core.jwt_handler import create_access_token
from app.dependencies.auth import get_current_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# -----------------------------
# Register API
# -----------------------------
@router.post("/register", response_model=UserResponse)
def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):
    new_user = register_user(db, user)

    if new_user is None:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    return new_user


# -----------------------------
# Login API
# -----------------------------
@router.post("/login", response_model=Token)
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):
    db_user = login_user(
        db,
        user.email,
        user.password
    )

    if db_user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        data={"sub": db_user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


# -----------------------------
# Protected Route
# -----------------------------
@router.get(
    "/users/me",
    response_model=UserResponse
)
def get_logged_in_user(
    current_user: User = Depends(get_current_user)
):
    return current_user


# -----------------------------
# Test Route
# -----------------------------
@router.get("/")
def auth_home():
    return {
        "message": "BattleVerse AI Authentication API is running successfully!"
    }