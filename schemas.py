from pydantic import BaseModel
from typing import List

class ItemBase(BaseModel):
    name: str
    price: float

class ItemCreate(BaseModel):
    items: List[ItemBase]

class Item(ItemBase):
    id: int
    class Config:
        orm_mode = True
