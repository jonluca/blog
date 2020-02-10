from unidecode import unidecode
iscontents = open('interesting-snippets.md').read()

iscontents = unidecode(iscontents)

with open('interesting-snippets.md','w') as out:
	out.write(iscontents)