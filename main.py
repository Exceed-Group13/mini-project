from fastapi import FastAPI, HTTPException, Body
from datetime import time, datetime, date, timedelta
from pymongo import MongoClient
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import urllib
from fastapi.middleware.cors import CORSMiddleware

load_dotenv('.env')

user = os.getenv('user')
password = urllib.parse.quote(str(os.getenv('password')))
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
    
class Mode(BaseModel):
    mode: str
    
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
# collection.delete_many({})
# a = collection.insert_many(data)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/lights")
def get_lights():
    """Check the status of all lights in every room."""
    light = collection.find({}, {'_id':0})
    tmp = list()
    for l in light:
        tmp.append(l)
    return {'result': tmp}

@app.put("/light/control")
def control_light(command: Command):
    """Turn on and turn off a light."""
    if command.room < 1 or command.room > 3:
        return HTTPException(status_code=400)
    light = collection.find_one_and_update({'room': command.room}, 
        {'$set': {'state': command.state}})
    return {'response': "success"}

@app.put("/lights/mode")
def change_mode(mode: Mode):
    """Change lights mode."""
    lst_word = ["auto", "manual"]
    if mode.mode.lower() not in lst_word:
        return HTTPException(status_code=400)
    light = collection.update_many({}, {'$set': {'mode': mode.mode}})
    return {'response': "mode changed"}

@app.put("/dim")
def dim_light(detail: Dim):
    room1 = collection.find_one_and_update({"room": detail.room},{'$set': {'light': detail.light, 'state': True}})
    if detail.light == 0:
        light_set = collection.find_one_and_update({"room": detail.room},{'$set': {'state': False}})   
    elif detail.light < 0 or detail.light > 255:
        return HTTPException(status_code=400)
    return {'response': "changed light itensity"}