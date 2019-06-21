import json

def loadJSON(filename):
    with open(filename, "r") as fp:
        return json.load(fp)