# automating this repetitive step

git submodule update --init # just in case

cd _includes/yeoman/
git pull origin master
cd ../..
git add _includes/yeoman/
git commit -m "submodule bump."

echo "now please push this commit up! ..."
