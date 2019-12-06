#!/bin/sh

set -e
reset="\033[0m"
red="\033[31m"
green="\033[32m"
yellow="\033[33m"
cyan="\033[36m"
white="\033[37m"

sleep 2
printf "$cyan # git pull $reset\n"
git pull
printf "$green done $reset\n"

sleep 2
printf "$cyan # git status $reset\n"
git status
printf "$green done $reset\n"

sleep 2
printf "$cyan # git add $reset\n"
git add .
printf "$green done $reset\n"

sleep 2
printf "$cyan # git commit $reset\n"
git commit -m "updated"
printf "$green done $reset\n"

sleep 2
printf "$cyan # git status $reset\n"
git status
printf "$green done $reset\n"

sleep 2
printf "$cyan # git push $reset\n"
git push
printf "$green done $reset\n"

exit;
