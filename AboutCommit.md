- created a new file called login, in which LoginDailog.jsx is created.

- dialog looks like login or signup page in flipkart.

- In customButtons, a new useState is defined. It will take the initial value as false. When login button is clicked, state changes to "true" and a dialog is displayed.
To make this happen, we have passes both use state arguments as props to the LoginDialog.jsx.
We have used onClick and onClose properties to make changes while clicking the button and closing it.


- divided the dialogue into two halves.
- used texfield and other properties in the right half.
- background property of css have various other features like - ** we can add a url to it **
    - background:"<color> url(<url>)

- created various other styled components for the login page.

- material ui have a default max height. So, to unset that property, we use:
    - PaperProps={sx:{maxWidth:'unset'}}