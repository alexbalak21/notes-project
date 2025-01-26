import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import SearchBar from "./SearchBar"
import {Button, Container} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export default function TopBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar color="" position="static">
        <Container>
          <Toolbar>
            <SearchBar />
            <Button sx={{ml: 3}} size="large" variant="contained">
              <AddIcon /> Add
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
