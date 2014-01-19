#!/bin/sh
# Automating this repetitive step.

git submodule update --init # Just in case

cd app/_includes/yeoman.wiki/
git pull origin master
cd ../../..
git add app/_includes/yeoman.wiki/
git commit -m "Wiki submodule bump"

echo "now please push this commit up! ..."
