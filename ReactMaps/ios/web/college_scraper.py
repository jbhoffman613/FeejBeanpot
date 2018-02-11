import urllib2
from BeautifulSoup import BeautifulSoup as bs
from lxml import html
import requests
import sqlite3
from sqlite3 import Error

try:
    conn = sqlite3.connect("/Users/mattmartin/collegeData.db")
    c = conn.cursor()
    print(sqlite3.version)
    metrics = {"best-colleges":"best","top-party-schools":"party",
               "best-college-locations":"location",
               "best-greek-life-colleges":"greek",
               "best-colleges-for-computer-science":"compSci",
               "best-colleges-for-religious-studies":"religion"}
    for page in metrics.keys():
        url = "https://www.niche.com/colleges/search/" + page
        print page
        response = requests.get(url)
        tree = html.fromstring(response.content)
        results = tree.xpath('//*[@id="app"]/div/section/div/main/div[1]/section/div[1]/div[2]/text()[1]')
        results = results[0].replace(",","")
        results = int(results)
        pages = results / 25 
        table_vals = []
        count = 0
        for i in xrange(1,pages):
            response = requests.get(url + "/?page=" + str(i))
            tree = html.fromstring(response.content)
            for j in xrange(1,35):
                name = tree.xpath('//*[@id="app"]/div/section/div/main/div[1]/section/div[2]/ol/li[' + str(j) + ']/div/div/a/div[2]/h2/text()')
                location = tree.xpath('//*[@id="app"]/div/section/div/main/div[1]/section/div[2]/ol/li[' + str(j) + ']/div/div/a/div[2]/ul[1]/li[2]/text()')
                acceptance_rate = tree.xpath('//*[@id="app"]/div/section/div/main/div[1]/section/div[2]/ol/li[' + str(j) + ']/div/div/a/div[2]/ul[2]/li[2]/div/span[1]/text()')
                sat_range = tree.xpath('//*[@id="app"]/div/section/div/main/div[1]/section/div[2]/ol/li[' + str(j) + ']/div/div/a/div[2]/ul[2]/li[4]/div/span[1]/text()')
                price = tree.xpath('//*[@id="app"]/div/section/div/main/div[1]/section/div[2]/ol/li[' + str(j) +']/div/div/a/div[2]/ul[2]/li[3]/div/span[1]/text()')
                if (name != [] and location !=[] and acceptance_rate !=[] and sat_range !=[] and price !=[]):    
                    try:
                        acceptance_rate = acceptance_rate[0].replace("%","")
                        acceptance_rate = int(acceptance_rate)
                        min_score = int(sat_range[0][0:3])
                        max_score = int(sat_range[0][5:8])               
                        price = int(price[0].replace(",","").replace("$",""))
                        table_vals.append((name[0], location[0], acceptance_rate, min_score, max_score, price))
                    except Exception as ex:
                        continue
        c.executemany('INSERT INTO ' + metrics[page] + ' VALUES (?,?,?,?,?,?)', table_vals)

    conn.commit()
    conn.close()
except Error as e:
    print(e)
   