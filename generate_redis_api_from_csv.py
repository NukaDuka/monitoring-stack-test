import csv
import argparse

parser = argparse.ArgumentParser(usage="python3 generate_redis_api_from_csv.py csvfile pk", description='Formats CSV for redis insertion', epilog='It does it in quite a crude way')

parser.add_argument('csvfile', help='CSV file to be parsed')
parser.add_argument('pk', help='Primary key of CSV fields')

args = parser.parse_args()

filename = args.csvfile
pk = args.pk
apiargs = []
with open(filename, 'r') as f:
    reader = csv.reader(f)
    pkid = reader.__next__().index(pk)
    for row in reader:
        key = ''
        value = ''
        for i in range(len(row)):
            if i == pkid:
                key = "policy:" + row[i]
            else:
                value += row[i] + ', '
        value = value[:-1]
        apiargs.append(('SET', key, value))

command = ''
for arg in apiargs:
    command += '*3\r\n'
    for part in arg:
        command += '$' + str(len(part)) + '\r\n' + part + '\r\n'
print(command)