from datetime import datetime
import zoneinfo  # For timezone handling
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    """users table"""
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    job_title = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True),
                        default=lambda: datetime.now(zoneinfo.ZoneInfo("UTC")))


class Post(Base):
    """post table"""
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    short_description = Column(String, nullable=False)
    content = Column(String, nullable=False)
    image = Column(String, nullable=True)
    published = Column(String, server_default='TRUE', nullable=False)
    created_at = Column(DateTime(timezone=True),
                        default=lambda: datetime.now(zoneinfo.ZoneInfo("UTC")))
    owner_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'),
                      nullable=False)
    
    owner = relationship('User')


class Vote(Base):
    """vote table"""
    __tablename__ = 'votes'

    post_id = Column(Integer, ForeignKey('posts.id', ondelete='CASCADE'),
                     primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'),
                     primary_key=True)
    

class Followers(Base):
    """followers table"""
    __tablename__ = 'followers'

    email = Column(String, nullable=False, primary_key=True)
    joined_at = Column(DateTime(timezone=True),
                       default=lambda: datetime.now(zoneinfo.ZoneInfo("UTC")))
