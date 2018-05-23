import pymongo
import datetime
from pymongo import MongoClient
import datetime

client = MongoClient()

DB_NAME = 'garagechecker'
DB_HOST = 'ds229690.mlab.com'
DB_PORT = 29690
DB_USER = 'user' #done
DB_PASS = 'user' #done

connection = MongoClient(DB_HOST, DB_PORT)
db = connection[DB_NAME]
db.authenticate(DB_USER, DB_PASS)

post = {
    "status": "true",
    "date": datetime.datetime.now(),
}

collection = db.garagechecker_dev
post_id = collection.insert_one(post).inserted_id
print(post_id)