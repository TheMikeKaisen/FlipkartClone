import { useContext, useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

//components
import LoginDialog from "../login/LoginDialog";

//context
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '0 3% 0 auto',
    // '& > *':{
    //     marginRight: 40,
    //     fontSize: 16,
    //     alignItems: 'center'
    // }
    '& > button': {
        marginLeft : '40px',
        marginRight : '15px',
        boxShadow : 'none',
    },
    '& > p': {
        margin : '15px',
        fontSize: '16px',
        alignItems: 'center',
        
    },
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }

}))
const Container = styled(Link)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginLeft: '25px',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))
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
    const {account, setAccount} = useContext(DataContext);

    const openDialog= () => {
        setOpen(true);
    }
    return(
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount}/>
                
                :
                <LoginButton variant = 'contained' onClick={()=> openDialog()}>Login</LoginButton>
            }

            <Typography style={{ width: 135}}>Become a Seller</Typography>
            <Typography >More</Typography>
            <Container to='/cart'>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open= {open} setOpen={setOpen}/> 
        </Wrapper>
    )
}

export default CustomButtons;