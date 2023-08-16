
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, Typography } from '@mui/material';
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
        
        <Box>
            {
                product && Object.keys(product).length > 0 && // Check if the product object has any keys
                <Box>
                    <Box>

                    </Box>
                    <Box>
                        <Typography>{product.title.longTitle}</Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView;