
import { useState } from 'react'
import {Dialog, Box, TextField, Typography, Button, styled} from '@mui/material'


// styled components
const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
    ) center 85% no-repeat;
    height: 84.2%;
    width: 28%;
    padding: 45px 35px;
    & > p, & > h5{
        color: #fff;
        font-weight: 600;
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex:1;
    & > div, & > button, & > p{
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color:#2874f0;
    font-weight: 600;
    cursor: pointer;
`


// main function
const LoginDialog = ( { open, setOpen } ) =>{

    const accountInitialValue = {
        login:{
            view: 'login',
            Heading: "Login", 
            subHeading: 'Get access to your Orders, Wishlist and Recommendation'
        },
        signup: {
            view: 'signup',
            Heading: "Looks like you're new here!",
            subHeading: "Sign up with your mobile number to get started"
        }
        }
    
    const toggleSignup=() => {
        toggleAccount(accountInitialValue.signup);
    }
    
    //state
    const [account, toggleAccount] = useState(accountInitialValue.login);


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValue.login);
    }
    return(
        <Dialog open={ open } onClose= {handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:'flex', height: '100%'}}>
                    <Image>
                        <Typography variant='h5'>{account.Heading}</Typography>
                        <Typography style= {{marginTop: '20px'}}>{account.subHeading}</Typography>
                    </Image>
                    { account.view === 'login' ?
                        <Wrapper>
                            <TextField variant = "standard" label = "Enter Email/Mobile number"/>
                            <TextField variant = "standard" label = "Enter password"/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{textAlign:"center"}}>OR</Typography>
                            <RequestOTP>Reqeust OTP</RequestOTP>
                            <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant = "standard" label = "Enter First Name"/>
                            <TextField variant = "standard" label = "Enter Last Name"/>
                            <TextField variant = "standard" label = "Enter Username"/>
                            <TextField variant = "standard" label = "Enter Email"/>
                            <TextField variant = "standard" label = "Enter password"/>
                            <TextField variant = "standard" label = "Enter phone"/>
                            <LoginButton>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;