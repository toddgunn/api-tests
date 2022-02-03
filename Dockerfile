from node:14-alpine
workdir /app
copy . /app
run npm install 
run npm test 
