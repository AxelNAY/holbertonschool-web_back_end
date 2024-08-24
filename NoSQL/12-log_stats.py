#!/usr/bin/env python3
'''Write a Python script that provides some stats
about Nginx logs stored in MongoDB.'''
from pymongo import MongoClient


def main():
    '''Provides some stats about Nginx logs stored in MongoDB.'''
    client = MongoClient()
    collection = client.logs.nginx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")


if __name__ == "__main__":
    main()
