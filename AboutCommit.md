## Loading while data is being fetched

1. - In 'redux/constants/**productConstant.jsx**', add more constants ->
        - GET_PRODUCT_DETAIL_REQUEST
        - GET_PRODUCT_DETAIL_SUCCESS
        - GET_PRODUCT_DETAIL_FAIL
        - GET_PRODUCT_DETAIL_RESET

2.  - In 'redux/actions/**productActions.jsx**',  create a new function '**getProductDetails**' where at first we will dispatch a message while data is loading.
    - Second, we fetch data from `<url>/products/<id>`
    - Third, we dispatch the data if successfull to the redux store or else if failed, then we dispatch an error to the redux store.

3. - In 'redux/reducer/**productReducer.js**', we create a new function **getProductDetailReducer** for state management and export it.

4. - In 'redux/**store.js**', we add **getProductDetailReducer** in the reducer object.

5.  - Now, we just have to call the function in 'components/details/DetailView.jsx'.

    -  In 'components/details/DetailView.jsx' import useEffect, useDispatch and useParams.
        - **useEffect** hook is used to perform side functions in functional component.
        - **useDispatch** is used to dispatch actions to modify the redux store.
        - **useParams** is used to extract route parameters. It's used here to extract the id parameter from the route URL. As url here is a variable.
    
    - we use useParams to extract the id.
    - import **getProductDetails** from redux/actions.vk
    - in useEffect, we dispatch the funtion **getProductDetails**, and in the dependancies, we write, dispatch and id. So that useEffect will run when either of the dependancies changes its value.

**note**: As of now, the backend is not connected, thus the redux store will provide loading to be false and the error.