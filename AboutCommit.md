## Wrapping components in menu icon

1.  - src/components/Header/header.js
    - Importing **IconButton** fron mui material
    - IconButton is a functionality provided by mui materials to wrap components inside an icon.

    - Import **Drawer** from material ui, which when clicked on menu icon, would open a drawer with the embedded components.
    - creating function **onClick** and **onClose** for when the drawer is clicked.

    - Import List and ListItems from material ui.
    - creating a new function list which would hold the customButton Items and display it, when the drawer is opened.

    - added theme properties to headers to handle the responsiveness.