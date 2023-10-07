import React from "react";
import { styled, alpha } from "@mui/material/styles";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import SearchIconWrapper from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "1rem",
  backgroundColor: alpha('#000', 0.35),
  "&:hover": {
    backgroundColor: alpha('#000', 0.45),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 2, color: "#357a38" }}>
      <AppBar position="static" sx={{ backgroundColor: "#03a9f4" }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            MarAbierto
          </Typography>
          <Box sx={{ flexGrow: 0.9 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Busca colecciones y artistas"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          {/* Aqui esta el componente del CartWidget */}
          <CartWidget />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
