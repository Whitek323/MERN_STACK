# MERN_STACK
backend{
	npm init -y
	npm install --save-dev typescript
	npx tsc --init
    npm i express
    npm i --svae-dev @types/express
    "run":{
        npx tsc
        node server.js
        "nodemon":{
            npx nodemon src/server.ts
        }
    }
    enable    "outDir": "./dist",  
    npm i --save-dev nodemon
    npm i -D ts-node
    "main": "dist/server.js",
    npm i -D eslint
    npx eslint --init
    \.eslintrc.js change browser to node
    npx eslint . --ext .ts 
    npm i dotenv
    npm i mongoose
    npm i envalid
    npm install mongodb

}