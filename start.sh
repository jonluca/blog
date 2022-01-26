echo_time() {
    echo $(date --iso-8601=seconds) "$*"
}
# Build bundle first to reflect changes, then build in production to minify
echo_time "Building"
source ~/.rvm/scripts/rvm
JEKYLL_ENV="production" bundle exec jekyll build --verbose --trace