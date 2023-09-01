from fastapi import FastAPI
from db import Base,engine
from item import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "https://thankful-river-01992e00f.3.azurestaticapps.net/"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router, prefix="/items")
#create all tables
Base.metadata.create_all(bind=engine)
