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

db = client["exceed13"] #use database name
collection = db['miniproject'] # db.collection_name

class Light(BaseModel):
    state: bool
    room: int
    mode: str
    light: int
    
class Command(BaseModel):
    state: bool
    room: int
    
class Dim(BaseModel):
    light: int
    room: int
    
data = [{
    "state": False,
    "room": 1,
    "mode": "manual",
    "light": 0
},{
    "state": False,
    "room": 2,
    "mode": "manual",
    "light": 0
},{
    "state": False,
    "room": 3,
    "mode": "manual",
    "light": 0
}]

app = FastAPI()
collection.delete_many({})
a = collection.insert_many(data)

@app.get("/lights")
def get_lights():
    """Check the status of all lights in every room."""
    light = collection.find({}, {'_id':0})
    tmp = list()
    for l in light:
        tmp.append(l)
    return {'result': tmp}

@app.patch("/light/control")
def control_light(command: Command):
    """Turn on and turn off a light."""
    light = collection.find_one_and_update({'room': command.room}, 
        {'$set': {'state': command.state}})
    return {'response': "success"}

@app.patch("/lights/mode/{mode}")
def change_mode(mode):
    """Change lights mode."""
    light = collection.update_many({}, {'$set': {'mode': mode}})
    return {'response': "mode changed"}

@app.patch("/dim")
def dim_light(detail: Dim):
    room1 = collection.find_one_and_update({"room": detail.room},{'$set': {'light': detail.light, 'state': True}})
    if detail.light == 0:
        light_set = collection.find_one_and_update({"room": detail.room},{'$set': {'state': False}})        
    return {'response': "changed light itensity"}