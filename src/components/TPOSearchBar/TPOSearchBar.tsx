import {
    InputBase,
    styled
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

 const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "dark",
  width: "100%",
  "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
  },
}));

 const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border : "1px solid rgba(225, 230, 239, 1)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
  },
}));
 const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(32, 32, 32, 0.8)",
  fontWeight : 600
}));





const TPOSearchBar = ()=>{
    return (
        
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here..."
            />
        </Search>
       
    )
};


export default TPOSearchBar;