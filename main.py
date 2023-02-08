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
    
class Command(BaseModel):
    state: bool
    room: int
    
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
<<<<<<< HEAD
    "mode": 1,
=======
    "mode": 0,
>>>>>>> aac5dc3743d3b30b3f5fa433f88f4a206706d294
    "light": 0
}]

app = FastAPI()
<<<<<<< HEAD
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
=======
collection.delete_many({})
a = collection.insert_many(data)

@app.get("/lights")
def get_lights():
    """1) ให้ปิดเปิดหลอดไฟผ่านปุ่ม โดยการเปิดจะแยกแต่ละห้องใช้คนละปุ่ม 
    และให้ปิดเปิดหลอดไฟผ่านเว็บ ให้มีฟังก์ชั่นคล้ายกับปุ่ม"""
    light = collection.find({}, {'_id':0})
    tmp = list()
    for l in light:
        tmp.append(l)
    #     print(l)
    # print(tmp)
    return {'result': tmp}

@app.patch("/light/control")
def control_light(command: Command):
    """1) ให้ปิดเปิดหลอดไฟผ่านปุ่ม โดยการเปิดจะแยกแต่ละห้องใช้คนละปุ่ม 
    และให้ปิดเปิดหลอดไฟผ่านเว็บ ให้มีฟังก์ชั่นคล้ายกับปุ่ม"""
    light = collection.find_one_and_update({'room': command.room}, 
        {'$set': {'state': command.state}})
    return {'response': "success"}
>>>>>>> aac5dc3743d3b30b3f5fa433f88f4a206706d294
