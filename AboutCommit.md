## Creating a Detailed page about the product

1.  - npm i react-router-dom
    - import BrowserRouter, Routes and Route from react-router-dom in App.js.
    - ### Browser Router
        - BrowserRouter is a component provided by the React Router library. It uses HTML5's history API to manage the navigation state and render the appropriate component based on the current URL. It should be placed at the root level of your application.

    - ### Routes
        - Routes is a component introduced in react-router-dom version 6. It's an alternative to using a series of Route components within a BrowserRouter. It provides a more structured way of defining routes using JSX and is especially useful for nested routes and layouts.

    - ### Route
        - Route is a component used to define a specific route and its corresponding component to be rendered when the URL matches the specified path. It's typically nested within a BrowserRouter.

    - Then wrap 'Home' and 'DetailView' component inside route.

2.  - In 'component/Home/**slide.jsx**', import "**Link**" from react-router-dom.
    - ### what is Link in React Router Dom ?
        - Link component is used to create clickable links that navigate between different routes in your React application without triggering a full page reload. It's a crucial component for enabling client-side routing and providing a smooth user experience in single-page applications.
    - Wrap the component inside Link tab for which we have to enable the routing.
    - now, when we click any product from the slide, it will open the DetailView page, which currently is nothing but a text saying "Hello", with the id = <product id>.

3.  - now, we want to go back to the home page when the flipcart icon at the Header is clicked.
    - In 'components/Header/**header.jsx**', import  Link from react-router-dom.
    - Wrap the component which hold flipkart logo and the text below it in 'Link' tab and link it to Home page. i.e. `<Link to = {'/'}>`, which will take us to the home page.