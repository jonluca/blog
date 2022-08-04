counter=0
for file in IMG*;
do mv $file palma-$counter.jpg; counter=$((counter+1));
done;
