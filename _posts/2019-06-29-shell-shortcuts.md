---
title: "Useful shell aliases and functions"
date: 2019-06-29 18:55:46 -0700
header-img: "/images/lyft-api-network.png"
---
<style>
    {%  include main.css  %}
</style>

Below I've outlined some of my preferred aliases and functions for shells. Some of them are macOS specific - I'll indicate that if so. These can be loaded by appending them to your `.zshrc` or by creating a new dotfile and `source`ing it in your shell profile. The full list of my dotfiles can be found [here](https://github.com/jonluca/dotfiles).

# Git add, commit, and push all in one - just add your commit message after invoking gq (i.e. "gq added gitignore")

```bash
function qg() {
  message="$*"
  git add --all
  # note that -S signs your commit. Remove if you have not set up GPG signatures
  git commit -S -m $message 
  git push
}
```

# Create a new directory and enter it

```bash
function mkd() {
  mkdir -p "$@" && cd "$_"
}
```


# Create a .tar.gz archive, using `zopfli`, `pigz` or `gzip` for compression

```bash

function targz() {
  local tmpFile="${@%/}.tar"
  tar -cvf "${tmpFile}" --exclude=".DS_Store" "${@}" || return 1

  size=$(
    stat -f"%z" "${tmpFile}" 2>/dev/null # macOS `stat`
    stat -c"%s" "${tmpFile}" 2>/dev/null # GNU `stat`
  )

  local cmd=""
  if ((size < 52428800)) && hash zopfli 2>/dev/null; then
    # the .tar file is smaller than 50 MB and Zopfli is available; use it
    cmd="zopfli"
  else
    if hash pigz 2>/dev/null; then
      cmd="pigz"
    else
      cmd="gzip"
    fi
  fi

  echo "Compressing .tar ($((size / 1000)) kB) using \`${cmd}\`…"
  "${cmd}" -v "${tmpFile}" || return 1
  [ -f "${tmpFile}" ] && rm "${tmpFile}"

  zippedSize=$(
    stat -f"%z" "${tmpFile}.gz" 2>/dev/null # macOS `stat`
    stat -c"%s" "${tmpFile}.gz" 2>/dev/null # GNU `stat`
  )

  echo "${tmpFile}.gz ($((zippedSize / 1000)) kB) created successfully."
}
```

# Determine size of a file or total size of a directory

```bash
function fs() {
  if du -b /dev/null >/dev/null 2>&1; then
    local arg=-sbh
  else
    local arg=-sh
  fi
  if [[ -n $@ ]]; then
    du $arg -- "$@"
  else
    du $arg .[^.]* ./*
  fi
}
```


# Start an HTTP server from a directory, optionally specifying the port

```bash
function server() {
  local port="${1:-8000}"
  sleep 1 && open "http://localhost:${port}/" &
  # Set the default Content-Type to `text/plain` instead of `application/octet-stream`
  # And serve everything as UTF-8 (although not technically correct, this doesn’t break anything for binary files)
  python -c $'import SimpleHTTPServer;\nmap = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\nmap[""] = "text/plain";\nfor key, value in map.items():\n\tmap[key] = value + ";charset=UTF-8";\nSimpleHTTPServer.test();' "$port"
}
```

# Empty trash (mac only)

```bash
function emptytrash() {
  sudo rm -rfv /Volumes/*/.Trashes/*
  sudo rm -rfv '/Users/jonlucadecaro/Library/Mobile Documents/*/.Trash/*'
  sudo rm -rfv ~/.Trash/*
  sudo rm -rfv /private/var/log/asl/*.asl
  sudo rm -rfv /Users/jonlucadecaro/Library/Mobile\ Documents/**/.Trash/*
  sqlite3 ~/Library/Preferences/com.apple.LaunchServices.QuarantineEventsV* 'delete from LSQuarantineEvent'
} 2>/dev/null
```


# Extract most know archives with one command

```bash
function extract() {
  if [ -f $1 ]; then
    case $1 in
      *.tar.bz2) tar xjf $1 ;;
      *.tar.gz) tar xzf $1 ;;
      *.bz2) bunzip2 $1 ;;
      *.rar) unrar e $1 ;;
      *.gz) gunzip $1 ;;
      *.tar) tar xf $1 ;;
      *.tbz2) tar xjf $1 ;;
      *.tgz) tar xzf $1 ;;
      *.zip) unzip $1 ;;
      *.Z) uncompress $1 ;;
      *.7z) 7z x $1 ;;
      *) echo "'$1' cannot be extracted via extract()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}
```

# Reset the touchbar (unfortunately too common - mac only)

```bash
function touchbarreset() {
  pkill "Touch Bar agent"
  killall "ControlStrip"
}
```

# Test timing for various stages of an HTTP connection to a domain

```bash
function curl_time() {
  curl -so /dev/null -w "\
   namelookup:  %{time_namelookup}s\n\
      connect:  %{time_connect}s\n\
   appconnect:  %{time_appconnect}s\n\
  pretransfer:  %{time_pretransfer}s\n\
     redirect:  %{time_redirect}s\n\
starttransfer:  %{time_starttransfer}s\n\
-------------------------\n\
        total:  %{time_total}s\n" "$@"
}
```

# Useful aliases

```bash
alias ls='ls -G'
alias ll='ls -alhTF' # most common use of ls for me
alias la='ls -A'
alias l='ls -CF'

# navigate directories simply using .
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."
alias ......="cd ../../../../.."
# cd shortcuts
alias ~="cd ~" # `cd` is probably faster to type though
alias -- -="cd -"

# get file permissions in octal (i.e. 0755)
alias perms="stat -f '%A %a %N' *"

# Reload the shell (i.e. invoke as a login shell)
alias reload="exec ${SHELL}"

# Lock the screen (when going AFK) - mac only
alias afk="/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend"

# Flush Directory Service cache and reset internet
alias flush="sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder && sudo ifconfig en0 down && sudo ifconfig en0 up"
```


