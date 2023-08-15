
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
const DetailView = () => {

    const dispatch = useDispatch();
    const {id}  = useParams();
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id]) //this means that useEffect hook will run either the value of dispatch changes or the value of id.
    return (
        <div>Hello</div>
    )
}

export default DetailView;