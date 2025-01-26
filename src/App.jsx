import React from "react"
import {Container, CssBaseline, AppBar, Toolbar, Typography, Tab, Tabs, FormControlLabel, Checkbox} from "@mui/material"
import {ThemeProvider, createTheme} from "@mui/material/styles"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import SearchBar from "./components/SearchBar"
import NoteList from "./components/NoteList"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
})

const App = () => {
  const [checked, setChecked] = React.useState(false)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Notes App</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <SearchBar />
          <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label="Show completed" />
          <Tabs value={0}>
            <Tab label="All" component={Link} to="/" />
            <Tab label="Personal" component={Link} to="/personal" />
            <Tab label="Home" component={Link} to="/home" />
            <Tab label="Business" component={Link} to="/business" />
          </Tabs>
          <Routes>
            <Route path="/" element={<NoteList />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
