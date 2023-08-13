import { useEffect } from "react";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./slide";
import Midslide from "./MidSlide";
import MidSection from "./MidSection";

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
            <Midslide products ={products} title = "Deal of the Day" timer = {false}/>
            <MidSection />
            <Slide products ={products} title = "Discounts for you" timer = {false}/>
            <Slide products ={products} title = "Suggested items" timer = {false}/>
            <Slide products ={products} title = "Recommended Items" timer = {false}/>
            <Slide products ={products} title = "Trending offers" timer = {false}/>
            <Slide products ={products} title = "Top deals on accessories" timer = {false}/>
            <Slide products ={products} title = "Season's top" timer = {false}/>
        </Component>

        </>
    )
}
export default Home;