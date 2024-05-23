import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  color: "#574143",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  flex: 1,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#574143",
  flex: 1,
}));
export default function PrimarySearchAppBar(props) {
  return (
    <Search
      style={{ backgroundColor: "#F5F4F7", maxWidth:"265px", height:"48px" }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={props.onChange}
        value={props.value}
      />
    </Search>
  );
}