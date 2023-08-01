import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    display: flex;
    & > button {
        margin-left : 40px;
        margin-right : 15px;
        box-shadow : none;
    }
    & > p{
        margin : 15px;
        font-size: 16px;
        // margin-top: 10px;
        align-items: center;
        
    }
`
const Container = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 25px;
    // margin-top: 10px;
`
const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    height: 38px;
    margin: auto;
    text-transform: none;
    padding: 5px 40px;
    font-weight: 600;
`
const CustomButtons=()=>{
    return(
        <Wrapper>
            <LoginButton variant = 'contained'>Login</LoginButton>
            <Typography style={{ width: 135}}>Become a Seller</Typography>
            <Typography >More</Typography>
            <Container>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButtons;