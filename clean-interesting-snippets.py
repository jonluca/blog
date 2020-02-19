from unidecode import unidecode
import re

int_snip = open('interesting-snippets.md').read()
# convert all unicode to closest ascii equivalent
contents = unidecode(int_snip)
# replace double dash with single
contents = contents.replace(r'(?<!\-)--','-')
# replace double space with single
contents = re.sub(' +', ' ', contents)
with open('interesting-snippets.md','w') as out:
	out.write(contents)
	out.close()
