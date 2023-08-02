- created a database using mongoDB.
- created a database folder where the connection is established between mongoDB and server. This is done by using mongoose.

- established connection between server and database by importing:import Connection from './database/db.js';
and calling Connection(); function.

- took the url in db from mongo server.

- imported dotenv by : npm i dotenv
* Why dotenv ?
- while providing url for the establishment of connection between server and client, we have to mention the username and password in the url only, which is considered to be a bad practice. Thus it is important to import dotenv and make .env file where our username and the possword will be stored.

- importing dotenv in index.js: import dotenv from 'dotenv';
- intitialization: dotenf.config();
- created .env file directly inside server folder and added user and password to it.
- we can acces the user and password by using process.env.<username/password>; 





