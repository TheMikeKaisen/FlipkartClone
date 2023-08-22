## deployment
## deploying the app on heroku
- install git 
- install heroku from **https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli**
- if client and server and deployed seperately, then we have to go through the problem of connecting them.
- so, it is better to deploy them together.
- so move the client folder inside the server folder, and deploy the whole server folder.
- first, we have to make some changes to deploy server.
    1. From database/db.js, move the mongo db url to index.js
    2. In the moved url, we add **process.env.MONGODB_URI**
        - ``const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.acf0s0a.mongodb.net/?retryWrites=true&w=majority`;``
        - This means that at the deployed server, url from process.env.MONGODB_URI will be considered, and if we try to run on the local server, the rest of the url will be considered.
    3. change the port to `const PORT = process.env.PORT || 8000;`, again if accessed from local machine, port 8000 will run, otherwise, any port that is available on Heroku will be allocated.
    4. Replace `connection(USERNAME, PASSWORD)` TO `connection(URL)`

    5. Add ```if(process.env.NODE_ENV === 'production'){
                app.use(express.static('client/build'))
            }```
        - process.env.NODE_ENV === 'production': This checks whether the environment variable NODE_ENV is set to 'production'. In a Node.js application, the NODE_ENV environment variable is often used to determine the environment the application is running in. It is set to 'production' when the application is deployed for production.

        - app.use(express.static('client/build')): This line sets up a middleware using the express.static function provided by the Express framework. Middleware functions are executed in the order they are defined in the code and can perform various tasks during the processing of an HTTP request. The express.static middleware is used to serve static files, such as HTML, CSS, JavaScript, and other assets.

        - In this case, the middleware is configured to serve static files from the "client/build" directory. This directory is often used in frontend projects built with tools like Create React App, Next.js, or other bundlers/build tools. During the build process of a frontend application, the build output is typically placed in the "build" or "dist" directory, which is where the optimized and production-ready assets are located.

        - When a user makes a request to a specific path on the server, the middleware will check if there's a corresponding file in the "client/build" directory. If it finds a file that matches the requested path, it will serve that file as a response to the client.
    6. rename **index.js** to **server.js**
    7. - go to package.json in the server folder, replace index.js to server.js in **main** key.
       - under **scripts** replace: "start": "nodemon index.js" to "start": "node server.js"
       - add two new scripts:
            ```"client-install": "cd client && npm install",
               "client-build": "cd client && npm run build"```
        - add a new script to run the previously added scripts :
            `"heroku-postbuild": "npm run client-install && npm run client-build"`
        - added a .gitignore file and added the names of those files which we do not have to push to the git repository.
            1. node_modules
            2. package-lock.json
            3. .env
            4. client/node_modules
            5. client/package-lock.json
            these files will not be deployed

    8. remove the url of local host 8000 wherever mentioned in the client folder, and leave it as empty. The url will be automatically fetched when the website runs.


note: the app was not deployed due to payment issues with heroku.