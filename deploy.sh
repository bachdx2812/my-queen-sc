set -e

# build
yarn build

# Navigate to dist
cd dist

# deploy
rm -rf .git
git init
git remote add origin git@github.com:bachdx2812/my-queen.git
git add .
git commit -m "deploy"
git push -f origin master
