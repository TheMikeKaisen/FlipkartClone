## making the Website responsive

### Making the advertisement banner responsive
To make an element responsive using material ui, we use the help of a  component called 'Grid'
1.  - Import Grid from material ui
    - used grid to make the advertisement banner responsive.
    - Grid divides the screen into 12 column space. We can define how much columns should be taken by an element in large, medium, small and extra small screen.
    - lg = {4}  -> this means that the particular grid element will take 4 columns of space in a large screen
    - sm = {}   -> for small screen, md = {} -> medium screen, xs = {} -> for extra small screen.

### adding covid image 
2.  - added a covid image below the ad.
    - used Media query to make it responsive.

### Making the first slide responsive
3.  - To make the advertisement on the first slide disappear in small screens.
    - In 'src/components/Home/MidSlide.jsx', we made the styled components 'RightComponent' and 'LeftComponent' as objects by removing the backticks and the format of the css. This is necessary to use theme.breakpoint media query.
    - In RightComponent, i.e the ad image, we added [theme.breakpoint.down('md')]: {display: 'none}, which would make the image disappear when screen is below medium range.
    - In LeftComponent I added -> [theme.breakpoint.down('md')]: {width: '100%'}, which means, when the size of screen is below medium sized screens, the width of the RightCompnent becomes 100%, which earlier was defined 83% for all the screen. 

### Making the carousel responsive
4.   - In 'src/components/Home/Banner.jsx' we add media query (theme.breakpoints.down) in the image. So that when the screen is below medium level, it will attain the height of 180 from 280 and zoom in respectively.

## Making the navbar responsive
5. Used media query for smaller screen and made the margin 0.