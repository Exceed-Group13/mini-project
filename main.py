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
    "mode": 0,
    "light": 0
}]

app = FastAPI()
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