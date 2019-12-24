#! /bin/bash
echo "Converting png to webp"
for file in {**/*.{png,jpg,jpeg},*.{png,jpg,jpeg}}
do
	name=$(echo "$file" | cut -f 1 -d '.')'.webp'
	if [ ! -f "$name" ] || [[ $* == *--force* ]]; then
    	cwebp -q 75 -alpha_q 10 $file -o $name
	fi
done

echo "Done!"
