from fastapi import FastAPI, HTTPException, Body
from datetime import time, datetime, date, timedelta
from pymongo import MongoClient
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import urllib
load_dotenv('.env')

user = os.getenv('username')
password = urllib.parse.quote(os.getenv('password'))
client = MongoClient(f"mongodb://{user}:{password}@mongo.exceed19.online:8443/?authMechanism=DEFAULT")

db = client["exceed13"] #use database name
collection = db['miniproject'] # db.collection_name

class Light(BaseModel):
    state: bool
    room: int
    mode: bool
    room_inten: int
    light: int
    
data = [{
    "state": False,
    "room": 1,
    "mode": 0,
    "room_inten": 2600,
    "light": 0
},{
    "state": False,
    "room": 2,
    "mode": 0,
    "room_inten": 4000,
    "light": 0
},{
    "state": False,
    "room": 3,
    "mode": 1,
    "room_inten": 3000,
    "light": 0
}]

app = FastAPI()
collection.delete_many({})
a = collection.insert_many(data)