import urllib.request
import urllib.error
import re
import urllib
import collections  # import OrderedDict


def get_webresponse(ticker):
    # new code
    # http://www.nasdaq.com /symbol/aapl
    # req =  "http://www.zacks.com/stock/quote/{}".format(ticker)
    # req =  "http://www.zacks.com/stock/quote/" + ticker
    req = "http://www.nasdaq.com/symbol/" + ticker
    opener = urllib.request .build_opener()
    opener.addheaders = [('User-agent', 'Mozilla/5.0')]
    # opener.open('http://www.example.com/')
    response = opener.open(req)
    return response.read().decode('utf-8')


def extract_exchange(text):
    patternToExtractExchange = r"(?P<junk>qbar_exchangeLabel\"><b>Exchange:</b>)(?P<exchange>\w+)"
    match_iter = re.finditer(patternToExtractExchange, text)
    exchange ='Pacific'
    for match in match_iter:
        exchange = format(match.group('exchange'))
    return exchange


def extractStockName(text):
    #patternForStockName = r"(?P<junk1><meta property=\"og:title\" content=\")(?P<stockName>[\w+\s\w+(\.)?]*)"
    #<meta property="og:title" content="Tencent&#32;Holdings&#32;Ltd.&#32;ADR (TCEHY)" />
    < title > TCEHY     stock
    quote - Tencent
    Holdings
    Ltd.ADR
    price - NASDAQ.com < / title >

    patternForStockName = r"(?P<junk1><meta property=\"og:title\" content=\")(?P<stockName>[\w+(\-)*(\&)*\s\w+(\.)?]*)"

    match_iter = re.finditer(patternForStockName, text)
    stockName = ''
    for match in match_iter:
        stockName = format(match.group('stockName'))
        #print(stockName[0:50])
        # print('  Stock Name: {0}'.format(match.group('stockName')))
    return stockName[0:50]

def main():

    #f = open('/Users/dmishra/Documents/My Stuff/movingaverages/2016_IBD.csv')
    #f = open('/Users/dmishra/Documents/My Stuff/movingaverages/csvbackup/Dow_30.csv')
    #f = open('/Users/dmishra/Documents/My Stuff/movingaverages/csvbackup/2016_IBD.csv')
    # f = open('')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages.csv)backup/2016_IBD.csv')
    #f = open('/Users/dmishra/Documents/My Stuff/movingaverages/csvbackup/3D_Printer_companies.csv')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages.csv)backup/5g_Wireless.csv')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages.csv)backup/Acquisitions_Targets.csv')
    #f = open('/Users/dmishra/Documents/My Stuff/movingaverages/csvbackup/Big_20.csv')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages.csv)backup/Bottoming.csv')
    f = open('/Users/dmishra/Documents/My Stuff/movingaverages/Cleanup.csv')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages.csv)backup/CANSLIM_SELECT.csv')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages.csv)backup/Chips.csv')
    # f = open('/Users/dmishra/Documents/My Stuff/movingaverages/csvbackup/sector-spdr-etf.csv')
    tickers=f.read().split('\n')
    for ticker in tickers:
        text = get_webresponse(ticker)
        # print(text)
        stockName = extractStockName(text)
        if not (stockName.startswith('(') | stockName.startswith(' (')) :
            print('{0},{1},{2},{3},{4},{5},{6}'.format(ticker, extract_exchange(text), 'STOCK', 'USD', '0.01',
                                                       extractStockName(text), extractStockName(text)))


main()