import pymongo

if __name__ == '__main__':
    client = pymongo.MongoClient('mongodb://127.0.0.1:27017/')
    db = client['emp']
    queries = db.queries
    post_id = queries.insert_one({"p":1}).inserted_id
    past = queries.find_one({"query":"batman"})
    print(past)