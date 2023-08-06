## Adding express.Router
- express.Router() is a feature in the Express.js framework for Node.js that allows you to create modular and reusable sets of routes. 

1. Created a folder 'controller' inside which 'user-controller.js' is made. A function 'userSignup' is defined which would take 'request' and 'response' as argument. 

2. Created a folder 'routes' to handle routes of the server. Created 'route.js' inside which we import the function 'userSignup' from 'user-controller.js' .

note: now, when u go to the signup page, add the credentials, and press continue, it would give an error in the network tab. This is because you are trying to fetch a data between two different servers. i.e. you are trying to fetch the sign up credentials from localhost:3000 to localhost:8000. To handle this error, we import a library 'cors'.

3. - npm i cors
   - import cors in index.js
   - add app.use(cors()) 

note: the latest versions of express cannot handle post request as efficiently, thus we need to install another library called ' body-parser '.

4. - npm i body-parser
   - import body-parser

now when the data is passed to the signup page. hit enter and the data will be displayed in the vscode console.