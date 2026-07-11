from sqlalchemy.orm import Session
from app.database.models import User
from app.schemas.user import UserRegister
from app.core.security import hash_password


def register_user(db: Session, user: UserRegister):
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return None

    # Create new user
    new_user = User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user