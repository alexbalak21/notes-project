import React from "react"

export default function Home() {
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
