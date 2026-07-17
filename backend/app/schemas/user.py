from pydantic import BaseModel, EmailStr


# -----------------------------
# Register User Schema
# -----------------------------
class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str


# -----------------------------
# Login User Schema
# -----------------------------
class UserLogin(BaseModel):
    email: EmailStr
    password: str


# -----------------------------
# User Response Schema
# -----------------------------
class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr

    class Config:
        from_attributes = True


# -----------------------------
# JWT Token Response Schema
# -----------------------------
class Token(BaseModel):
    access_token: str
    token_type: str


# -----------------------------
# JWT Token Data Schema
# -----------------------------
class TokenData(BaseModel):
    email: str | None = None