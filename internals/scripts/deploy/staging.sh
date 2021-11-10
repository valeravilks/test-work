#!/usr/bin/env bash

# CD to ./dist directory
if [ ! -d "./.dist-staging" ]; then
  echo "Folder ./.dist-staging doesn't exist."
  exit 1
fi
cd ./.dist-staging || exit 1

# Remove all files but git
echo 'Cleaning distribution folder...'
find . -path ./.git -prune -o -exec rm -rf {} \; 2> /dev/null
if [ ! -e .gitignore ]; then
  echo 'nothing' >> .gitignore
fi


echo 'Copying files...'
mkdir -p ./wp-content/themes/dod/
mkdir -p ./wp-content/mu-plugins/
mkdir -p ./wp-content/plugins/

# Copy theme
#cp -R ../src/. ./wp-content/themes/dod/
rsync -avz --exclude='../src/tokens' --exclude='../src/style.tokens' ../src ./wp-content/themes/dod

# Copy build folder
cp -R ../build/. ./wp-content/themes/dod/build/
cp -R ../acf-json ./wp-content/themes/dod/
cp -R ../assets ./wp-content/themes/dod/
cp -R ../vendor ./wp-content/themes/dod/
cp -R ../templates ./wp-content/themes/dod/
cp -R ../functions ./wp-content/themes/dod/
cp -R ../algolia ./wp-content/themes/dod/

# Copy theme files
cp ../index.php ../footer.php ../header.php ../functions.php ../style.css ./wp-content/themes/dod/


# Copy plugins
cp -R ../wp-content/plugins/. ./wp-content/plugins/
cp -R ../wp-content/mu-plugins/. ./wp-content/mu-plugins/

# Removing forbidden WPengine plugin
if [ -f "./wp-content/plugins/hello.php" ]; then
    echo "Removing hello dolly plugin."
    rm ./wp-content/plugins/hello.php
else
	echo "No hello dolly plugin present."
fi

echo 'Commit and push deployment...'
git add . && git commit -m "Release"
git push

echo 'Finished Deploying'

# Removing folders below ensures file watching still works after npm run dist
rm -rf ../theme/dist/scripts/
rm -rf ../theme/dist/styles/

echo ''
echo 'Finished Removing DIST styles / scripts folder'
