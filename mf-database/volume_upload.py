#!/usr/bin/python

# Volume Upload Script
#
# This is a volume upload script that will loop through the ../mf-archive/ directory
# and its tei.xml files. It will automate the upload notebook process by pulling the
# appropiate diary entries enclosed by <pb/> tags.
#
# It uses regex, file operations, and some filtering.
#
# This script only works if the data within the xml files are CORRECT and CONSISTENT

import os
import sys
import re
from bs4 import BeautifulSoup
from pymongo import MongoClient
# pprint library is used to make the output look pretty
from pprint import pprint
#connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient('mongodb://localhost:27017/')
mf_db = client.mf # db
mf_collection = mf_db.diaries.find() # collection

# Issue the serverStatus command and print the results to check server status
#
# serverStatusResult=db.command("serverStatus")
# pprint(serverStatusResult)

directory = "../mf-archive/"
pageArray = []
def upload_volume(pageArray):
    mf_db.diaries.update_one(
    {"_id":1},
    {
    "$set": {
    "page":pageArray,
     }
    })

def main():
    # loop through files in ../mf-archive directory
    for filename in os.listdir(directory):
        if filename.endswith(".xml"):
            file = open(os.path.join(directory, filename), "r")
            content = file.read()
            #print content
            contentMatch = re.findall("<pb/>(.*?)(?=<pb/>)", content, re.DOTALL)
            print "found "+str(len(contentMatch))+" entries for the following notebook: "+filename

            # it will loop through each entry inside contentMatch and pull out the associated metadata
            for pageContent in contentMatch:
                urlMatch = re.findall("http://(.*?).jpg", pageContent)
                urlMatch = urlMatch[0]+".jpg" # append .jpg back onto urlMatch
                handMatch = re.findall("\[(.*?)\]", pageContent)
                metaDataMatch = re.findall("(Notebook.*?)</p>", pageContent, re.DOTALL)
                metaDataMatch[0] = metaDataMatch[0].replace('\n', '') # removes new line characters
                metaDataMatch[0] = " ".join(metaDataMatch[0].split()) # removes duplicated whitespace
                metaDataMatch[0] = re.split(';|,',metaDataMatch[0]) # split up string by delimeter ; or ,

                if handMatch: # check if list is not empty, because apparently we have instances with no hand ?
                hand = handMatch[0]

                #
                # Note: in some cases below I take the zero index because the value is stored in a list ['value']
                #       and I do not want to store a list within the dictionary
                #
                pageNum = int(filter(str.isdigit, metaDataMatch[0][1]))
                lastIndexMetaData = len(metaDataMatch[0])-1 # last index of metaData which should be the transcriber
                transcriber = re.findall("(.*?)(?=<)", metaDataMatch[0][lastIndexMetaData], re.DOTALL)[0]
                imageUrl = re.split('/',urlMatch)[-1:][0] # split url matches by / and  take last element which should be image name
                folioNum = re.split(' ', metaDataMatch[0][4])[-1:][0] # split 4th index of metaData by spaces which should be folio number,
                # then take last index e.g. ['fol.','121v']
                pageArray.append({"number":pageNum,
                "folio_num": folioNum,
                "image": imageUrl,
                "content":pageContent,
                "transcriber": transcriber,
                "hand": hand})

                upload_volume(pageArray)
                
                '''
                print pageContent
                print urlMatch
                print handMatch
                print pageNum
                for data in metaDataMatch[0]:
                    print data
                print
                    '''

if __name__ == '__main__':
    main()
