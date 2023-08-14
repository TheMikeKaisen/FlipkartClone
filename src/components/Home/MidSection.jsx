import { Grid, styled } from "@mui/material"

import { imageURL } from "../../constants/data"


//styled components
const Wrapper = styled(Grid)`
    margin-top: 20px;
    justify-content: space-between;
`
const Image = styled('img')(({theme})=>({ // importing theme to use media queries.
    marginTop: 19,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: { // this basically says that when the screen becomes smaller than medium screen, add the following css to the content.
        objectFit: 'cover', // zooms the image as screen becomes smaller.
        height: 120 // height stays the same
        
    }
}))
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


    return(
        <>
        <Wrapper container>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} xs={12} sm={12}> 
                        <img src= {image} alt = "adimage" width="100%"/>
                    </Grid>
                ))
            }
        </Wrapper>
        <Image src ={url} alt = "covid"/>
        </>
    )
}

export default MidSection;