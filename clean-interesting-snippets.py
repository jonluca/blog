from unidecode import unidecode
import re

path = 'interesting-snippets.md'
int_snip = open(path).read()
# convert all unicode to closest ascii equivalent
contents = unidecode(int_snip)
# replace double dash with single, but don't match triplets for jekyll
contents = re.sub(r'(?<!-)--(?!-)','-', contents)
# replace double space with single
contents = re.sub(' +', ' ', contents)
with open(path,'w') as out:
	out.write(contents)
	out.close()
