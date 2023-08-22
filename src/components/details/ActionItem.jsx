//state
import { useState } from "react";

import { Box, Button, styled } from "@mui/material";
//icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//cart Actions
import { addToCart } from "../../redux/actions/cartActions";

//paytm
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //state
    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () =>{
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = () => {
        let response = payUsingPaytm({amount: 500, email: 'codeforinterview@gmail.com'})
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }
    return(
        <LeftContainer>
            <Box style = {{ padding: '15px 20px', border: '1px solid #f0f0f0', marginBottom: 10}}>
                <Image src = {product.detailUrl} alt="product"/>
            </Box>
            <StyledButton variant="contained" style = {{marginRight: 10, background: '#ff9f00'}}onClick={() => addItemToCart()}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={()=>buyNow()} style = {{ background: '#f35413'}}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;