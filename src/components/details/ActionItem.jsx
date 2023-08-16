import { Box, Button, styled } from "@mui/material";
//icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

//styled Components
const LeftContainer = styled(Box)`
    min-width: 40%;
    // padding: 40px 0 0 80px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const Image = styled('img')({
    padding: '15px'
})
const StyledButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px;
    margin-top: 10px;
`
const ActionItem = ({product}) =>{
    return(
        <LeftContainer>
            <Box style = {{border: '1px solid #f0f0f0'}}>
                <Image src = {product.detailUrl} alt="product"/>
            </Box>
            <StyledButton variant="contained" style = {{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style = {{ background: '#f35413'}}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;