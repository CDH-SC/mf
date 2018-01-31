#!/usr/bin/python

# Volume Upload Script
#
# This is a volume upload script that will loop through the ../mf-archive/ directory
# and its tei.xml files. It will automate the upload notebook process by pulling the
# appropiate diary entries enclosed by <pb/> tags.

import os
import sys
import re
from bs4 import BeautifulSoup

directory = "../mf-archive/"

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
            handMatch = re.findall("\[(.*?)\]", pageContent)
            metadataMatch = re.findall("(Notebook.*?)</hi>", pageContent, re.DOTALL)
            url = urlMatch[0]
            print pageContent
            print url
            print handMatch
            print metadataMatch
            print
