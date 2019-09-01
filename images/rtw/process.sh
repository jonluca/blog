for file in *.{jpg,png};
do cwebp -q 75 -alpha_q 10 "$file" -o "${file%.*}.webp";
done;
