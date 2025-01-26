import {Container, Typography} from "@mui/material"
import React from "react"
import TabPanel from "../components/TabPanel"

export default function Page() {
  return (
    <Container>
      <Typography variant="h4">Page</Typography>
      <TabPanel />
    </Container>
  )
}
