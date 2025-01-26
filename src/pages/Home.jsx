import React from "react"
import {Box, Container, Paper, Typography} from "@mui/material"
import TopBar from "../components/TopBar"

const Home = () => (
  <Box sx={{bgcolor: "bg", minHeight: "100vh"}}>
    <TopBar />
    <Container>
      <Typography variant="h4" color="foreground.main" sx={{padding: 2}}>
        Welcome to the Home Page!
      </Typography>
      <Paper elevation={3} sx={{padding: 2}}>
        <Typography variant="body1" color="text.primary">
          Here's some content inside a Paper component.
        </Typography>
      </Paper>
    </Container>
  </Box>
)

export default Home
