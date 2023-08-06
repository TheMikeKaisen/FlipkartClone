After signing up in the signup page, after clicking the continue button, the page should be closed.
Thus creating an if condition, which is, if a response is returned, close the dialog.

- **const signupUser = async()=>{**
        **let response = await authentiateSignup(signup);**
        **if(!response) return;**
        **handleClose();**
    **}**