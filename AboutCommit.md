- created a new file called login, in which LoginDailog.jsx is created.

- dialog looks like login or signup page in flipkart.

- In customButtons, a new useState is defined. It will take the initial value as false. When login button is clicked, state changes to "true" and a dialog is displayed.
To make this happen, we have passes both use state arguments as props to the LoginDialog.jsx.
We have used onClick and onClose properties to make changes while clicking the button and closing it.