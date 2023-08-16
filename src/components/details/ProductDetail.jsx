import {Box, Typography, styled} from '@mui/material';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {                   // style the paragraph tags inside the parent component.
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`


const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return (
        <>

        <Typography>{product.title.longTitle}</Typography>
            <Typography  style={{marginTop: 5, color:'#878787', fontSize: 14}}>8 Rating & 1 Review
                <Box component ='span'><img src={fassured} alt="fassuered" style={{width:77, marginLeft:20}}/></Box>
            </Typography>
            <Typography>
                <Box component = "span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component = "span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component = "span" style={{color: '#388e3c'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge />Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
            <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C </Typography>
            <Typography><StyledBadge />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100 Know More  </Typography>
            <Typography><StyledBadge />Buy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
            <Typography><StyledBadge />5% Cashback on Flipkart Axis Band  Card</Typography>
            <Typography><StyledBadge />No Cost EMI on Bajaj Finserv EMI Card on Cart Value above ₹2999 T&C</Typography>
        </SmallText>
        </>
    )
}

export default ProductDetail;