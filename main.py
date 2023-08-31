from fastapi import FastAPI
from db import Base,engine
from item import router


app = FastAPI()
app.include_router(router, prefix="/items")

# from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://127.0.0.1:8000"
    "http://localhost:8000",
    "http://127.0.0.1:5500"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#create all tables
Base.metadata.create_all(bind=engine)