## Opening cart when Add to cart is Clicked and adding Styles to cart

### Opening Cart when Add to Cart Button is Clicked from product page
- In componenet/details/ActionItems.jsx, import useState, useNavigate, useDispatch.
    - The **useNavigate** hook is part of React Router and is used to obtain a function that allows you to programmatically navigate to different routes within your application.

- import addToCart from 'redux/actions/cartActions'

- define state variable 'quantity' and update funtion 'setQuantity' using useState and setting the initial value of quantity as 1.
    `const [quantity, setQuantity] = useState(1);`

- creating a reference function which can be late used to navigate.
    `const navigate = useNavigate();`

- creating a dispatch reference function which can be used later to dispatch items to redux store.
    `const dispatch = useDispatch();`

- creating a funtion 'addItemToCart' which would first dispatch the item to reduxt store.
    `dispatch(addToCart(id, quantity));`
    the id and quantity is passed to addToCart function and then dispatched to the store.

- navigate function is called.`navigate('/cart');` which would direct to the cart items page.

- In the button 'Add to Cart', an onClick function is defined which would call the function 'addItemToCart'.

## Adding style to cart
- On a large screen , the cart page has two main components. The left component holds the list of products added in the cart, and the Right component keeps the sum of prices of the products.

- created files **CartItem** to style the left component, and **TotalView** to style the right component.

note: replaced state.CartItems with **state.cartItems** in cartReducer.js
