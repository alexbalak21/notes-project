import React from "react"
import {Box, InputBase, IconButton} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => (
  <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
    <InputBase sx={{flex: 1, bgcolor: "background.paper", p: 1, borderRadius: 1}} placeholder="Search…" inputProps={{"aria-label": "search"}} />
    <IconButton>
      <SearchIcon />
    </IconButton>
  </Box>
)

export default SearchBar
