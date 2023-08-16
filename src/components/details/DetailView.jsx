
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, styled, Grid } from '@mui/material';

import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';


// styled components
const Component = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;
`
const Container = styled(Grid)`
    background: #fff;
    display: flex;
    flex-direction: row;
`
const RightContainer = styled(Grid)`
    margin-top: 50px;
`
const DetailView = () => {

    const dispatch = useDispatch();
    const {id}  = useParams();

    const {loading, product} = useSelector(state => state.getProductDetails);

    useEffect(() => {
        // If either of them is true, fetch the details
        if(!product || id !== product.id){
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, product, loading]) //this means that useEffect hook will run if any of the dependancies changes.

    console.log(product);
    return (

        <Component>
            {
                product && Object.keys(product).length > 0 && // Check if the product object has any keys
                <Container container>
                    <Grid item lg={4} md ={4} sm = {8} xs = {12}>
                        <ActionItem product = {product} />
                        
                    </Grid>
                    <RightContainer item lg = {8} md = {8} sm={8} xs={12}>
                        
                        <ProductDetail product = {product} />
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}

export default DetailView;