## Sign Up Page

### accountInitialValue
- created an object "accountInitialValue" in which we have defined two more objects "login" and "signup".
- "login" and "signup" will both contain three text values - "view", "Heading" and "subHeading".

### state
- created a stae using useState which will hold the value of "account" and to update it, "toggleAccount"
- initially, we set the value to "accountInitialValue.login"
    - const [account, toggleAccount] = useState(accountInitialValue.login);

### toggleSignup
- created a function "toggleSignup" which will be used to toggle between login page and signup page.
- when called, it will change the account state to accountInitialValue.signup
    - const toggleSignup=() => {
         toggleAccount(accountInitialValue.signup);
     }