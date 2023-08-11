## Adding redux

### What is redux ?
Redux is a state management library for React applications. It helps manage the state of your application in a predictable and centralized manner, making it easier to maintain and update complex UIs. Redux stores the entire application state in a single JavaScript object called the "**store**". Components can dispatch actions to modify the state, and these actions are processed by "**reducers**" to update the state. Redux promotes a unidirectional data flow, simplifying debugging and testing.

1. add redux devTools extension in chrome
2. installed redux in clients folder
    - npm i redux
3. - created a folder 'redux', which would contain the redux necessary functions.
   - created folders -> 'actions', 'constants', 'reducers' and a file 'store.js' 
   ## what is store in Redux ??
    - a store is a centralized data repository provided by libraries like Redux. It holds the application's state and provides methods to update, access, and manage that state, making it accessible to different components while ensuring predictable and controlled state changes.

4. import createStore from redux
    - In Redux, createStore is a function provided by the Redux library that is used to create a Redux store. 

## What are Reducers ?
- A reducer is a pure function that specifies how the application's state should change in response to dispatched actions. 
    - **Key Features**
    a. **State and Action**: A reducer takes two arguments: the current state and an action. The state represents the current state of the application, and the action describes what change needs to be made to the state. The reducer examines the action's type and payload to determine how the state should be updated.
    b. **Action Handling**: Reducers use switch statements or if-else chains to handle different action types. Each action type corresponds to a specific change in the state. The reducer computes the new state based on the current state and the information provided by the action.
    c. **Immutability**: Redux enforces immutability, which means that a reducer should never modify the existing state directly. Instead, it creates a new copy of the state with the required changes. This ensures that the previous state remains unchanged, which is essential for tracking state transitions and debugging.

5.  - import 'combineReducers' from react in store.js
    - In Redux, combineReducers is a utility function provided by the Redux library that allows you to combine multiple reducers into a single reducer function

6. install redux-devtools-extension
    - npm i **redux-devtools-extension**
    - **redux-devtools-extension** is a browser extension and a development tool that enhances the debugging and monitoring capabilities of Redux applications. It allows developers to inspect and visualize the changes in the Redux store, track dispatched actions, and trace how the application's state evolves over time


    - import 'composeWithDevTools' from 'redux-devtools-extension'
        ## composeWithDevTools
        - composeWithDevTools is a function provided by the redux-devtools-extension package that enhances the compose function from the Redux library. It allows you to incorporate Redux DevTools into your Redux store setup more conveniently, especially when you want to apply multiple enhancers, such as middlewares or other store enhancers.
        The compose function from Redux is used to apply multiple store enhancers in a functional programming style. The composeWithDevTools function is an enhanced version of compose that integrates the Redux DevTools extension, providing an easier way to include it in your store setup.

7. install **redux-thunk**
    - npm i redux-thunk
    ## Redux-Thunk
    - redux-thunk is a middleware for Redux, a popular state management library in React applications. Middleware in Redux allows you to extend the behavior of the store's dispatch function, enabling asynchronous actions and more complex logic to be handled in addition to simple actions.
    
    redux-thunk is often used to handle asynchronous actions, such as making API calls, in a Redux application. Normally, Redux actions are synchronous, but with redux-thunk, you can dispatch functions (thunks) in addition to plain objects. Thunks are functions that can perform asynchronous operations and then dispatch regular Redux actions once the asynchronous operation is completed.

8.  - export store in store.js
    - To use the store properties, we have to wrap the whole components in the store.
    - To do that, we first have to install react-redux -> npm i react-redux

9.  - Open **index.js** in clients
    - npm i react-redux
    - import Provider from 'react-redux' -> import {Provider} from 'react-redux'
    - import redux/store.js 
    - wrap the whole app inside provider with store = {store}

10.  - define getProductsReducer in a new file 'redux/reducers/productReducers.js'
     - import it in store.js 

**note : The app will not run till this process, because the reducer is empty till now**

11. - create a new js file 'productActions.js' in 'src/redux/actions'.
    - import axios to call the api.

    - create 'src/redux/constants/productConstants.js'. 
    - this file will keep all the constants for the productAction.js
    - define constant to return when action runs and fails respectively.

    - import all the constants from 'productActions.js' in 'productActions.js'
    - used react-thunk to add a middleware -> see the file.

    note: a response api will give all the information including **data**, headers, config, status, message, etc. But the only thing we want to return on success is the **data**. Thus we use the concept of **Destructuring**.
        - const { data } = await axios.get(...)
    - **Dispatch**: The dispatch function is used to send actions to the Redux store. When you call dispatch(action), Redux processes the action and forwards it to the appropriate reducers. Reducers are responsible for updating the state based on the action type and payload.

    - **Middleware**: Middleware in Redux is a way to extend the dispatch process. Middleware functions sit between the action being dispatched and the moment it reaches the reducers. They allow you to perform tasks such as logging, making asynchronous requests, modifying actions, and more.

12. - In 'redux/reducer/productReducer.js' we define the function 'getProductReducer' which would take initial state and action as function argument. here action refers to the dispatch function called in 'productActions.js'
    - Thus we use switch case to return success payload when successfully retrieved the product information, 
    else return unsuccessfull payload in the redux dev extension.

**Now, the program should function**
note: data will be loaded in the next commit.
