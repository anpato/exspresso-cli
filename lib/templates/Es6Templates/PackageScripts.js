export const PackageScripts = `{
  "dev": "nodemon --exec babel-node ./src",
  "heroku-postbuild": "yarn install",
  "clean": "rm -rf build && mkdir build",
  "build-babel": "babel -d ./build ./src -s ",
  "build": "yarn clean && yarn build-babel",
  "start": "yarn build && node ./build/index.js"
}`
