from unidecode import unidecode
import re

int_snip = open('interesting-snippets.md').read()
# convert all unicode to closest ascii equivalent
contents = unidecode(int_snip)
# replace double dash with single, but don't match triplets for jekyll
contents = re.sub(r'(?<!-)--(?!-)','-', contents)
# replace double space with single
contents = re.sub(' +', ' ', contents)
with open('interesting-snippets.md','w') as out:
	out.write(contents)
	out.close()
