from unidecode import unidecode
int_snip = open('interesting-snippets.md').read()
contents = unidecode(int_snip)

with open('interesting-snippets.md','w') as out:
	out.write(contents)
	out.close()
