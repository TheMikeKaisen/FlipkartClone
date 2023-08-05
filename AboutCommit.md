## creating api and storing it in the server

1. created an onClick function for the button continue which would call another function 'signupUser' which would save the details as api.

2. created a new folder service. and a new file in it 'api.js'

3. installed a new library 'axios' -> npm install axios.

- Axios: Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.

Here axios will be used to call api. 

4. - import axios in the api.js
   - use axios.post to post the data on the url.
   - axios takes two arguments - url and the data which have to be saved.
   - url = 'http:/localhost:8000/signup' where the api will be saved. 
   - export the function authenticateSignup

5. - import the authenticateSignup in loginDialog and use it inside signupUser function.
