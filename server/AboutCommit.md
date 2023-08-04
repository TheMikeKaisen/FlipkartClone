- created a constants folder and data.js in it. data.js contains all the data of the products.

- created default.js which imports the products from data.js

- created a model folder and "product-schema.js" in it.
Product-schema.js contains the structure of how our product api will look like or we can say it defines a validation condition for api.

- Like mySql, where a database is created and tables are added in the database, we create a mongoose model named "product".
MongoDB is the database and in product-schema.js, we have added the properties. Now using those properties, we create table, or in react, we call it Collection.

- After adding the structure of how the database will look like in schema, we will make a collection of it.
    - const Product = mongoose.model('product', productSchema);
    - here Product is the name of the collection which uses productSchema as the structure.
    - then export Product.

- Adding required and unique field to the product schema id will eliminate duplicate insertion. 

