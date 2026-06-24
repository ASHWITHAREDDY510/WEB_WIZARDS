from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine, SessionLocal
import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Web Wizards Backend Running"}

@app.post("/signup")
def signup(user: dict):
    db = SessionLocal()

    existing = db.query(models.User).filter(
        models.User.email == user["email"]
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = models.User(
        name=user["name"],
        email=user["email"],
        password=user["password"]
    )

    db.add(new_user)
    db.commit()

    return {"message": "Account Created"}

@app.post("/contact")
def contact(data: dict):
    db = SessionLocal()

    msg = models.Contact(
        name=data["name"],
        email=data["email"],
        subject=data["subject"],
        message=data["message"]
    )

    db.add(msg)
    db.commit()

    return {"message": "Message Sent Successfully"}
