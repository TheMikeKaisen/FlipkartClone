## Removing items from cart

- components/cart/CartItems.jsx 
- import useDispatch from react-redux
- import removeFromCart from redux/actions/cartActions.js
- Inside the remove button tag, add the onClick propoerty which would call a function 'removeItemFromCart' with item.id as parameter.
- inside the 'removeItemFromCart' , use dispatch function to call **removeFromCart** in cartActions to remove the item with the id provided in the function