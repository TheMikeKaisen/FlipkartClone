
import { InputBase, Box, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
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
const Search=()=>{
    return(
        <>
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more"/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>

        </SearchContainer>
        </>
        
    )
}
export default Search;