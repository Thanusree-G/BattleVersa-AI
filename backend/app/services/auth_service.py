from sqlalchemy.orm import Session

from app.database.models import User
from app.schemas.user import UserRegister
from app.core.security import hash_password, verify_password


def register_user(db: Session, user: UserRegister):
    """
    Register a new user
    """

    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return None

    # Create new user
    new_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hash_password(user.password)
    )

    # Save to database
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def login_user(db: Session, email: str, password: str):
    """
    Login existing user
    """

    # Find user by email
    user = db.query(User).filter(User.email == email).first()

    if user is None:
        return None

    # Verify password
    if not verify_password(password, user.hashed_password):
        return None

    return user