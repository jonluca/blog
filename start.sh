echo_time() {
    echo $(date --iso-8601=seconds) "$*"
}
# Build bundle first to reflect changes, then build in production to minify
echo_time "Building"
test -f ~/.rvm/scripts/rvm && source ~/.rvm/scripts/rvm
JEKYLL_ENV="production" bundle exec jekyll build --verbose --trace
echo_time "Done"