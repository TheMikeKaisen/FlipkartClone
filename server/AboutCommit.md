## Extracting id from url and extracting product details from database to redux store

1.  - added a new function 'getProductsById' to the 'product-controller.js' which would take a url as a request. 
    - This function will extract the id from the url using: `const id = request.params.id ;`
    - ex: in http:/localhost:3000/product/product1. In this url, whaterever value after http:/localhost:3000 is called **params**.
    - After extracting the id, we will look for a product in Product collection with the same id.
    - If exists, a response would be sent with the product data as a json file. If not, an error would be returned.

2.  - In routes/route.js, we add a new route, `Route.get('/product/:id', getProductById)`. 
    - Here the first parameter is the request.