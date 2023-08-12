## To import the data of the products in redux state

1. **Importing**
    - import { useEffect } from "react";
    - import { getProducts } from "../../redux/actions/productActions";
    - import { useDispatch, useSelector } from "react-redux";

2. ## What is useSelector() ?
    - **useSelector** is a hook provided by the react-redux library. It allows you to access the Redux store's state.
    - We have used it to extract the **products** property from the state returned by the **getProducts** reducer.

    - The parameter passed to useSelector is a **callback function** that takes the entire Redux state as an argument and returns the specific piece of state that you're interested in.
    
    -  We are extracting **products** from the **getProducts** slice of the state.

3. ## What is useDispatch() ?
    - It is used to access the Redux store's dispatch function. This function is used to dispatch actions to the Redux store.

4. ## What is useEffect() ?
    - useEffect is a built-in React hook that allows you to perform side effects in functional components. It takes a function as its first argument and an array of dependencies as its second argument.

    - In this case, the useEffect hook is being used to dispatch an action (getProducts()) when the component mounts. The dispatch function is obtained from the useDispatch hook. The dispatch function sends an action to the Redux store, which triggers the associated reducer to update the state.

5. The array [dispatch] is the dependency array. It specifies that the effect should be re-run whenever the dispatch function changes. Since dispatch doesn't change during the component's lifetime, the effect is essentially only run when the component is mounted.
