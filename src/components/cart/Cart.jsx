

import { Box, Grid, Typography, styled } from "@mui/material";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

//components
import CartItem from "./CartItem";
import Totalview from "./TotalView";


//styled components
const Container = styled(Grid)`
    padding: 30px 135px;

`
const Header = styled(Box)`
    padding: 15px 24px;
`
const Cart = () => {
    const { cartItems } = useSelector(state=> state.cart)
    return (
        <>
            {
                cartItems.length > 0 ? 
                    <Container container>
                        <Grid item lg ={9} md ={9} sm={12} xs={12}>
                            <Header>
                                <Typography> My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item=> (
                                    <CartItem item ={item} />
                                ))
                            }
                        </Grid>
                        <Grid item lg ={3} md ={3} sm={12} xs={12}>
                            <Totalview />
                        </Grid>
                    </Container>
                : <div>Empty</div>
            }
        </>
    )
}


export default Cart;