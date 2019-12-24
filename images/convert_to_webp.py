#! /usr/local/bin/python3

from pathlib import Path
import re
import subprocess
import os

for filename in Path('.').rglob('*.*'):
    if not re.search(r'(jpg|jpeg|png)', str(filename)):
    	continue

    out = str(filename).split('.')[0] + '.webp'
    if os.path.isfile(out):
    	continue
    cmd = f'cwebp -q 75 -alpha_q 10 "{str(filename)}" -o "{out}"'
    print(cmd)
    ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    output = str(ps.communicate()[0].decode('utf-8'))
    print(output)