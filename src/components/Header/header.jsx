
import React from 'react';
import { AppBar, Toolbar, Box, Typography, styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

import { Link } from 'react-router-dom';


// We can style the components of material ui with css using styled components. But whenever we style a mui component and store the changes to a variable, we have to replace the name of the component in the body with the variable name (capital)
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Box)`
    margin-left: 220%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    display: flex; 
    align-items: center;
    color: #fff;
`
const PlusImage = styled('img')({ // img is not a mui component. When styling non mui components using
                                  // styled, we use this syntax. 
    width: 10,
    height: 10,
    marginLeft: 4
})
const CustomButtonWrapper = styled(Box)(({theme})=>({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display: 'none'
  }

}))


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        
        <StyledHeader position="static" color="primary">
          <Toolbar style={{minHeight: '55px'}}>
            <Typography>
              <Link to={'/'} style={{textDecoration:'none'}}>
                <Component>
                  <img src = {logoURL} alt="logo" style={{width: 75}}/>
                  <Box style={{display: 'flex'}}>
                      <SubHeading>Explore&nbsp;     {/*&nbsp adds a space after explore */}
                          <Box component="span" style={{color:'yellow'}}>Plus</Box>
                      </SubHeading>
                      <PlusImage src ={subURL} alt = 'subUrl'/>
                  </Box>
                </Component>
              </Link>
            </Typography>
            <Search/>
            <CustomButtonWrapper>
              <CustomButtons/>
            </CustomButtonWrapper>
          </Toolbar>
        </StyledHeader>
        
    );
    
}

export default Header;
