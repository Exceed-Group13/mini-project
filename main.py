from fastapi import FastAPI, HTTPException, Body
from datetime import time, datetime, date, timedelta
from pymongo import MongoClient
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import urllib
load_dotenv('.env')

user = os.getenv('user')
password = urllib.parse.quote(os.getenv('password'))
client = MongoClient(f"mongodb://{user}:{password}@mongo.exceed19.online:8443/?authMechanism=DEFAULT")

print(user, password)

db = client["exceed13"] #use database name
collection = db['miniproject'] # db.collection_name

class Light(BaseModel):
    state: bool
    room: int
    mode: bool
    light: int
    
data = [{
    "state": False,
    "room": 1,
    "mode": 0,
    "light": 0
},{
    "state": False,
    "room": 2,
    "mode": 0,
    "light": 0
},{
    "state": False,
    "room": 3,
    "mode": 1,
    "light": 0
}]

app = FastAPI()
#collection.delete_many({})
# a = collection.insert_many(data)

@app.patch("/dim")
def dim_light(detail: Light):
    room = collection.find_one({"room": detail.room})
    if detail.mode==0:
        room1 = collection.find_one_and_update({"room": detail.room},{'$set': {'light': detail.light}})
        if detail.light==0:
            light_set = collection.find_one_and_update({"room": detail.room},{'$set': {'state': False}})        
    ans = {"state": detail.state,
            "room": detail.room,
            "mode": detail.mode,
            "light": detail.light}
    return ans