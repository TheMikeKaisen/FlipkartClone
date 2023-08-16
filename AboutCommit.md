## fetching details from redux store and using it in front-end

1.  - In 'component/detail/DetailView.jsx', import a custom hook **useSelector**.
    - useSelector is a React hook from react-redux that **retrieves specific data from the Redux store** in functional components. 
    - we use destructuring to extract value of loading and product from state.getProductDetails from state of redux store.

    - added loading and product as dependancies as when they change, the state should change too. 
    - before that, a condition should be added that. `if(!product || id !== product.id){
            dispatch(getProductDetails(id))
        }`
    - This condition ensures that the product details is only dispatched only If the product is not yet loaded in the Redux store (meaning it's null or undefined) **or** extracted id (id obtained from useParams()) is not equal to the product id.

    - Otherwise, the dispatch function will run infinite loop.

    - `product && Object.keys(product).length > 0 &&`
    - If product is null or undefined, it will evaluate to false. If product is a valid object, it will evaluate to true.
    
    - This part checks if the product object has at least one property, which indicates that it's not an empty object. Object.keys(product) returns an array of the keys of the product object, and length gives the number of keys. If the length is greater than 0, it means the object is not empty.