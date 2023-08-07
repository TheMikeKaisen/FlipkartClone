## creating a profile.jsx file, adding css to the username, adding logout button

1. Created 'profile.jsx' inside 'Header' folder.
2. Created 'Profile' function which would take state variable 'account' and update state function 'setAccount' as props.
3. - Imported 'Menu' and 'MenuItem' from material ui and added it.
   - A button would pop up when the username is clicked.
4. Imported a power setting icon with properties : **<PowerSettingsNewIcon color="primary" fontsize="small"/>**
5.  - created functions "handleClose", 'logoutUser', 'handleClick', etc.
    - when logoutUser is called, it will set the 'account' value to an empty string. Then the login button is displayed, not the username.
6. - Go to CustomButtons.jsx and import 'profile'.
   - Replace Typography with profile component, where 'account' state variable and 'setAccount' update function is passed as a prop. 
    