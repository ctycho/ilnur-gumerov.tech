from typing import List

from fastapi import Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session

from app import models, oauth2
from app.database import get_db
from app.schemas import FollowerIn, FollowerOut


router = APIRouter(
    prefix='/followers',
    tags=['Followers']
)


@router.get("/", status_code=status.HTTP_201_CREATED, response_model=List[FollowerOut])
def get_followers(db: Session = Depends(get_db),
                  _: models.User = Depends(oauth2.get_current_user)):

    followers = db.query(models.Followers).all()

    return followers


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=FollowerOut)
def follower(follower: FollowerIn, db: Session = Depends(get_db),
             _: models.User = Depends(oauth2.get_current_user)):

    row = db.query(models.Followers).filter(models.Followers.email == follower.email).first()
    if row:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                      detail='Follower with that email already exists')

    new_follower = models.Followers(**follower.model_dump())
    db.add(new_follower)
    db.commit()
    db.refresh(new_follower)

    return new_follower
