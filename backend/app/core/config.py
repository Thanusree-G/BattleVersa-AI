from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "BattleVerse AI"

    SECRET_KEY: str = "battleverse_secret_key"

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60


settings = Settings()