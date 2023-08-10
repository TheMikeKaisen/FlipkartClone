## Adding a new route to display the products on home page
1. - created a new file inside 'controller' -> product-controller.js
   - imported collection 'Product' from 'model/product-Schema.js'
   - created an async function 'getProducts' which would return the list of products.
   - const product = await Product.find({}); 
          -> when a condition is not passed in the find function, it will return all the data available.
   - exported the function 'getProducts'

2.  - In 'routes/route.js', we import the function
    - add a new route -> 'Router.get('/product', getProducts)
    - we are using a get function to 

**note** : 
GET: Retrieve data from a server. Used for reading information. Parameters can be visible in the URL.
POST: Send data to a server. Used for creating or updating information. Parameters are hidden in the request body. 

