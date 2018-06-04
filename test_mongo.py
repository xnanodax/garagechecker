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

collection = db.garagechecker_dev
collection.create_index('date')

post = {
    "status": "true",
    "date": datetime.datetime.now(),
}

#time posted in is PST

# post_id = collection.insert_one(post).inserted_id
# print(post_id)

# x = collection.find().sort('date', pymongo.DESCENDING).limit(1)
last_entry = collection.find_one(sort=[('date', pymongo.DESCENDING)])

print(last_entry)

