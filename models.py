from sqlalchemy import Column, Integer, String, Float,Sequence
from db import Base

class Item(Base):
    __tablename__ = 'items'
    id = Column(Integer, Sequence('item_id_seq'), primary_key=True, index=True, autoincrement=True)
    name = Column(String)
    price = Column(Float)