import redis
import argparse
import random
import time
import sys

parser = argparse.ArgumentParser(description='Sets and gets keys randomly')
parser.add_argument('--host', '-s', default='localhost', help='Redis server host')
parser.add_argument('--port', '-p', type=int, default=6379, help='Port number of redis host')
parser.add_argument('--prefix', '-f', default='random', help='Get/set key prefix')

args = parser.parse_args()

random.seed(12345)
randomvals = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.001, 0.001, 0.001, 0.01, 0.01, 0.01, 0.025, 0.025, 0.025, 0.05, 0.05, 0.075, 0.1]

r = redis.Redis(host=args.host, port=args.port, db=0)
while True:
    try:
        getval = random.randrange(len(randomvals))
        setval = random.randrange(len(randomvals))
        delayval = random.randrange(5, len(randomvals))
        setkey = random.randrange(128)
        getkey = random.randrange(128)

        setkey_p = args.prefix + ':' + str(setkey)
        getkey_p = args.prefix + ':' + str(getkey)
        #print(randomvals[setval])
        #print(randomvals[delayval])
        if randomvals[setval] != 'no':
            ret = r.set(setkey_p, random.randrange(1024))
        if randomvals[getval] != 'no':
            getres = r.get(getkey_p)
        if randomvals[delayval] != 'no':
            time.sleep(randomvals[delayval])
    except KeyboardInterrupt:
        sys.exit(0)