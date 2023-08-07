import { Box, Typography, Menu, MenuItem, styled } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
    
    margin-left: 10px;
`
const Logout = styled(Typography)`
    font-size: 14 px;
    margin-left: 20px;
    padding: auto;
`

const Profile = ({account, setAccount}) => {

    //state
    const [open, setOpen] = useState(false);

    const handleClick= (event) =>{
        setOpen(event.currentTarget)
    }

    const handleClose = () =>{
        setOpen(false);
    }
    const logoutUser = () => {
        setAccount('');
    }

    return(
        <>
            <Box onClick={handleClick}>
                <Typography style={{padding:"15px 35px", paddingTop: 15, cursor: 'pointer'}}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                
            >
                <MenuItem onClick={()=> {handleClose(); logoutUser();}}>
                    <PowerSettingsNewIcon color="primary" fontsize="small"/>
                    <Logout>Logout</Logout>
                </MenuItem>
                    
            </Component>
        </>
    )
}

export default Profile;
