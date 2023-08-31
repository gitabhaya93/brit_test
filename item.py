from models import Item
from sqlalchemy.orm import Session
from sqlalchemy import func
from db import get_db
import schemas

from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from sqlalchemy import insert

router = APIRouter()

@router.post("/add")
def add_items(request_data: schemas.ItemCreate, db: Session = Depends(get_db)):
    db_items = [item.dict() for item in request_data.items]
    stmt = insert(Item).values(db_items)
    db.execute(stmt)
    db.commit()
    return db_items


@router.get("/list")
def get_items(db: Session = Depends(get_db)):
    items = db.query(Item).all()
    return items


@router.get("/summary")
def get_summary(db: Session = Depends(get_db)):    
    total_cost = db.query(func.sum(Item.price)).scalar() or 0
    return {"total_cost": total_cost}