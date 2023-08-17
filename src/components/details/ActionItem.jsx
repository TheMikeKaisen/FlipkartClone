import { Box, Button, styled } from "@mui/material";
//icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

//styled Components
const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 20px 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding: '20px 40px'
        }
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: '20px',

}))
const Image = styled('img')({
    width: '95%',
    padding: '15px'
})
const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]:{
        width: '46%'
    }
}))
const ActionItem = ({product}) =>{
    return(
        <LeftContainer>
            <Box style = {{ padding: '15px 20px', border: '1px solid #f0f0f0', marginBottom: 10}}>
                <Image src = {product.detailUrl} alt="product"/>
            </Box>
            <StyledButton variant="contained" style = {{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style = {{ background: '#f35413'}}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;