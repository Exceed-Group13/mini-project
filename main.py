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
    mode: str
    light: int
    
class Command(BaseModel):
    state: bool
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
<<<<<<< HEAD
    "mode": 1,
    "mode": 0,
=======
    "mode": "manual",
>>>>>>> 621eed22e06cf78e8afd7d4319953d51d0c84554
    "light": 0
}]

# collection.delete_many({})
# a = collection.insert_many(data)

app = FastAPI()
#collection.delete_many({})
# a = collection.insert_many(data)


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

<<<<<<< HEAD
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
=======
@app.patch("/lights/mode/{mode}")
def change_mode(mode):
    """Change lights mode."""
    light = collection.update_many({}, {'$set': {'mode': mode}})
    return {'response': "mode changed"}
>>>>>>> 621eed22e06cf78e8afd7d4319953d51d0c84554
