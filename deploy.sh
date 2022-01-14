#!/bin/sh




# to turn all png into .jpg: 
#  magick mogrify -format jpg *.png; rm *.png





msg="rebuilding site $(date)"

git add --a
git commit -m  "$msg"
git push


set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

git add .

if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Grab ImgBot updates
git pull

git push


# let's update the main repo too?


