import { useState, useEffect } from "react";


import { InputBase, Box, styled, List, ListItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productActions";

import { Link } from "react-router-dom";

//styled components
const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 4px;
    margin-left: 190px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`

const SearchIconWrapper = styled(Box)`
    display: flex;
    color : blue;
    padding : 5px;
`
const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px;
`
const Search=()=>{
    //state
    const [text, setText] = useState('');

    const { products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    //useEffect
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }
    return(
        <>
        <SearchContainer>
            <InputSearchBase 
            placeholder="Search for products, brands and more"
            onChange={(e) => getText(e.target.value)}
            value = {text}
            />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
            text &&  // the list appears only if you input text in the search bar.
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link 
                                    to = {`/product/${product.id}`}
                                    onClick = {() => setText('')} // to close the search the bar after clicking it
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
        }
        </SearchContainer>
        </>
        
    )
}
export default Search;