echo_time() {
    echo $(date --iso-8601=seconds) "$*"
}
# Build bundle first to reflect changes, then build in production to minify
echo_time "Building"
JEKYLL_ENV="production" bundle exec jekyll build --verbose --trace
# Run minifiers
echo_time "Minifying CSS"
find './_site/' -iname "*.css" -exec yui-compressor '{}' -o '{}' \; -exec echo {} done \;
echo_time "Minifying js"
# find . -iname "*.js" -exec yui-compressor '{}' -o '{}' \; -exec echo {} done \;
echo_time "Minifying HTML"
find './_site/' -iname "*.html" -exec html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true '{}' -o '{}' \; -exec echo {} done \;
# compress
echo_time "Compressing"
./compress.py