
import { useState, useContext } from 'react'
import {Dialog, Box, TextField, Typography, Button, styled} from '@mui/material'

// api
import { authentiateSignup } from '../../service/api'
import { authenticateLogin } from '../../service/api'

//context
import { DataContext } from '../../context/DataProvider'

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
const Error = styled(Typography)`
    font-size: 12px;
    color: #ff6161;
    font-weight: 600;
    margin-top: 10px;
    line-height: 0;
`

const signupInitialValues= {
    firstname: '', 
    lastname: '', 
    username: '', 
    email:'', 
    password: '', 
    phone: ''
}
const loginInitialValues = {
    username: '', 
    password: ''
}

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
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    //context
    const {setAccount} = useContext(DataContext);


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);
    }

    const onInputChange=(e) => {
        setSignup({ ...signup, [e.target.name]:e.target.value}); 
        // ... before signup will initialize the object with existing values in the object
        // e.target.name is a variable. thus it is written inside squared brackets
    }

    const onValueChange=(e)=> {
        setLogin({...login, [e.target.name]: e.target.value});
    }


    const signupUser = async()=>{
        let response = await authentiateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else {
            setError(true);
        }
        
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
                            <TextField variant = "standard" onChange={(e) => onValueChange(e)} name ="username" label = "Enter Username"/>

                            {error && <Error> Please enter valid username of password</Error>}
                            {/* When the password is false, it will provide this error. */}

                            <TextField variant = "standard" onChange={(e) => onValueChange(e)} name ="password" label = "Enter password"/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{textAlign:"center"}}>OR</Typography>
                            <RequestOTP>Reqeust OTP</RequestOTP>
                            <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant = "standard" onChange={(e) => onInputChange(e)} name ="firstname" label = "Enter First Name" />
                            <TextField variant = "standard" onChange={(e) => onInputChange(e)} name ="lastname" label = "Enter Last Name"/>
                            <TextField variant = "standard" onChange={(e) => onInputChange(e)} name ="username" label = "Enter Username"/>
                            <TextField variant = "standard" onChange={(e) => onInputChange(e)} name ="email" label = "Enter Email"/>
                            <TextField variant = "standard" onChange={(e) => onInputChange(e)} name ="password" label = "Enter password"/>
                            <TextField variant = "standard" onChange={(e) => onInputChange(e)} name ="phone" label = "Enter phone"/>
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}


export default LoginDialog;