# Cart
## Defining cartAction, Cart Constants, and Cart Reducer

## CartConstants.js
- In 'redux/constants', create a new js file **cartConstants.js**
- Define constants for various actions -> adding a product to cart, error, removing a product from cart, etc.

-   `export const ADD_TO_CART = 'addToCart';`
    `export const ADD_TO_CART_ERROR = 'addToCartError';`
    `export const REMOVE_FROM_CART = 'removeFromCart';`
    `export const CART_RESET = 'cartReset';`

## CartActions.js

- In 'redux/actions', create a new file **cartActions.js**.
- Import **axios** for making api requests.
- import every constants from cartConstans.js as actionTypes.
- **addToCart** is an action creator which takes two parameters: **id** and **quantity**.
- As redux does not support asynchronous functions, thus we have used redux Thunk and used dispatch funtion to dispatch items to the reducer.
- An axios get request is made to fetch data from the url: ``const {data} = await axios.get(`${URL}/product/${id}`)``
- If fetching is successful, then the **data** and **quantity** is dispatched as the payload with type set to **actionTypes.ADD_TO_CART** :
    `dispatch({type: actionTypes.ADD_TO_CART, payload: { ...data, quantity}})`
    

- Else, an error message is dispatched.

- Created a new action creator **removeFromCart** for when a product has to be removed from the store.
- it takes an **id** as parameter.
- Inside it, only the **id** is dispatched in the payload with type set to actionTypes.REMOVE_FROM_CART, which is the constant set in cartConstants.js.
    - `dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id});`


## cartReducer.js
- Import the constants.
- The reducer function is exported as cartReducer, which takes current state and the action as parameters.
- The initial state of the shopping cart is defined with an object that has a property **cartItems** initialized as an empty array.
- switch statement takes **action.type** as argument, inside which two cases are defined: ADD_TO_CART and REMOVE_FROM_CART.

    
    **case actionTypes.ADD_TO_CART**
    -  In cartActions.js, we dispatched data and quantity as payload with type: ADD_TO_CART
    - So we fetch that item in variable **item**.
    - `const exist = state.CartItems.find(product => product.id === item.id);`
        - here, we find if the id of the item('product'), already exists in the cartItems which is the new object added in the store.
    - If item already exists in the cartItems `return{...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data)}`
        - The code enters the block and returns a new state object that is a copy of the current state (...state), with the cartItems array modified.

        - In the cartItems array, the .map() function is used to iterate over each item (data) in the array.

        - For each data (cart item), the condition data.product === exist.product is checked. Here, data.product seems to be a property of each item, and exist.product is referencing the same property in the existing item that matches the id.

        - If the condition is true, meaning that the current item (data) matches the existing item in terms of the product property, then the ternary operator ? is used:

        - If the condition is met, item (the new item being added) is returned. This effectively replaces the existing item with the new item that is being added, effectively updating its quantity.
        If the condition is not met, the original data item is returned, which preserves other items in the array unchanged.

     - **Else** it would take the initial state values (...state), and add the new item in the cartItems.`cartItems: [ ...state.cartItems, item]`

     **case actionTypes.REMOVE_FROM_CART**
     - When an action of type **REMOVE_FROM_CART** is dispatched, this case in the reducer is triggered.

    - The action.payload is expected to hold the id of the item that needs to be removed from the shopping cart.

    - The reducer returns a new state object created through the spread operator` ...state`, copying the existing state.

    - Within the new state object, the cartItems property is updated by applying the `.filter()` function to the state.cartItems array.

    - The `.filter()` function iterates through each item (referred to as product) in the cartItems array and checks whether the id of the product matches the action.payload (the id of the item to be removed). If the id doesn't match, the product is kept in the array; if the id does match, the product is excluded from the array.

    - The result of the `.filter()` operation is a new array containing all items except the one with the specified id, effectively removing the desired item from the cart.
