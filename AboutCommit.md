## Creating context api
## Changing the login button to username after signing up successfully.

### What is context api ?
-  The Context API in React is a built-in feature that allows you to share data or state across multiple components without passing props manually through each component in the component tree. It provides a way to create a central data store (context) that can be accessed by any component within its scope, making it easier to manage and access shared data or state. Context helps simplify data sharing and avoids "prop drilling," especially in larger applications with deeply nested components.

1. - Created a folder 'context' and in it, a new file 'DataProvider.jsx' in which we will create a context.
   - imported createContext and useState.
   - Defined a new context 'DataContext' initially set to 'none'.
   - Defined a function, DataProvider which would take 'children' as props. 
   - created a state with state variable 'accounts' and update state function 'setAccounts'.
   - define DataContext.Provider in which we set the desired state to the desired children components.

   ## what is a context provider ?
   - It is the provider component of a specific context (in this case, it appears to be named DataContext). The provider component is responsible for providing the data or state to all the child components that consume this context.

2. - We go to loginDialog.jsx and import 'useContext' and 'DataContext'.
   - Initially, the value inside DataContext is null, and 'account' state variable is an empty string.
   - We use useContext hook to use the update state variable to update 'accounts'.
        - **const {setAccount} = useContext(DataContext);**
   - In signupUser function, where the dialog is closed after successfully signing up the user, we set the account to signup.firstname. 
        - **const signupUser = async()=>{**
            **let response = await authentiateSignup(signup);**
            **if(!response) return;**
            **handleClose();**
            **setAccount(signup.firstname);**
        **}**

3. - Now the target is to display the name of the user after successfully signing up.
   - So after signed in, in the place of login button, i want to display the name of the user.
   - We go to the CustomButtons.jsx where the login Button is defined.
   - We import 'DataContext' and the hook 'useContext'.
   - 'useContext' hook is being used to access the 'accounts' data from the 'DataContext'
   - We define a condition outise the login button component that
        - If there is a value inside 'account' state variable, then display the first name of the user.
        - Else display the login button.

4. - Go to 'App.js' and import 'DataProvider'
   - Wrap all the components inside <DataProvider>

Now all the components inside the DataProvider tag will act as children components on which the context will be applied.

    