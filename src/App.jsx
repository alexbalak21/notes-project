import React from "react"
import {Box, Container, CssBaseline, Paper, Typography} from "@mui/material"
import TopBar from "./components/TopBar"
import {ThemeProvider, createTheme} from "@mui/material/styles"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const lightTheme = createTheme({
  palette: {
    mode: "light",
    bg: "#f5f5f5",
    fg: "red",
  },
})

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Box sx={{bgcolor: "bg", minHeight: "100vh"}}>
          <TopBar />
          <Container></Container>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
