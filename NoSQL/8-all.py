#!/usr/bin/env python3
'''Write a Python function that lists all documents in a collection.'''


def list_all(mongo_collection):
    '''Return an empty list if no document in the collection.'''
    my_list = []
    for doc in mongo_collection.find():
        my_list.append(doc)
    return my_list
