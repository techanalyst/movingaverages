import urllib2
import re
import urllib
from collections import OrderedDict

def get_date(ticker):
    # new code
    #req =  "http://www.zacks.com/stock/quote/{}".format(ticker)
    req =  "http://www.zacks.com/stock/quote/" + ticker
    opener = urllib2.build_opener()
    opener.addheaders = [('User-agent', 'Mozilla/5.0')]
    #opener.open('http://www.example.com/')
    response = opener.open(req)
    #end new code

    #response = urllib2.urlopen( "http://www.zacks.com/stock/quote/{}".format(ticker))
    found = False
    for line in response.read().split('\n'):
        if found:
            m = re.search("</sup>(.*)</td>", line)
            return m.group()[6:-5]
        if 'Exp Earnings' in line:
            found = True


def date_map(tickers, out):
    dates = OrderedDict()
    f = open(out, 'w')
    for ticker in tickers:

        #dates[ticker] = get_date(ticker)
        f.write("{0}, {1}\n".format(ticker, get_date(ticker)))
        print ("writing "+ ticker)
    f.close()
    return dates


def date_csv(tickers, out):
    dates = date_map(tickers)
   # f = open(out, 'w')
    
    #for ticker, date in dates.iteritems():
    #    f.write("{0}, {1}\n".format(ticker, date))
    #f.close()
def main():
    f = open('input.csv')
    tickers=f.read().split('\n')
    #date_csv(tickers,'output.csv')
    date_map(tickers,'output.csv')

main()        
