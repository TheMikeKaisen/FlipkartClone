

import {Dialog} from '@mui/material'

const LoginDialog = ( { open, setOpen } ) =>{

    const handleClose = () => {
        setOpen(false);
    }
    return(
        <Dialog open={ open } onClose= {handleClose}>
            hello
        </Dialog>
    )
}

export default LoginDialog;