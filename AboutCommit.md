## searching products in searchbar

- In src/components/Header/Search.jsx/
- imported state and useEffect hooks.
- initialized the state variable 'text' with an empty string ''. 
- Created a **getText** function, which would call **setText**, which is the update function for state variable.
- added onChange to the InputSearchBase. As soon as new text is entered, it would call **getText** and set the state variable to whatever has been typed on the searchBar.

- Import **useSelector** and **useDispatch** from 'reac-redux'.
- Import **getProducts** from 'redux/actions/productActions.js'.
- Import **Link** from react-router-dom.

- If there is a text entered in the searchBar, then only a list is displayed under the search Bar. 

- here, the useEffect is responsible for fetching the initial product data when the component mounts. 