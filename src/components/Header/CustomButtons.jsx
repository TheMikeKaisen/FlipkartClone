import { useContext, useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//components
import LoginDialog from "../login/LoginDialog";

//context
import { DataContext } from "../../context/DataProvider";

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
        align-items: center;
        
    }
`
const Container = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 25px;
    
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
    //state
    const [open, setOpen] = useState(false);

    //context
    const {account} = useContext(DataContext);

    const openDialog= () => {
        setOpen(true);
    }
    return(
        <Wrapper>
            {
                account ? 
                <Typography>{account}</Typography>
                :
                <LoginButton variant = 'contained' onClick={()=> openDialog()}>Login</LoginButton>
            }

            <Typography style={{ width: 135}}>Become a Seller</Typography>
            <Typography >More</Typography>
            <Container>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open= {open} setOpen={setOpen}/> 
        </Wrapper>
    )
}

export default CustomButtons;