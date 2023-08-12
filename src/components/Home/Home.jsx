import { useEffect } from "react";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";


const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home=()=>{
    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch])

    return(
        <>
        <NavBar/>
        <Component>
            <Banner/>
        </Component>

        </>
    )
}
export default Home;