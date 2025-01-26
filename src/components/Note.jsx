import React from "react"
import {Card, CardContent, Typography, Chip} from "@mui/material"

const Note = ({title, description, date, category}) => (
  <Card sx={{mb: 2}}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {date}
      </Typography>
      <Chip label={category} size="small" sx={{mt: 1, bgcolor: "primary.main", color: "primary.contrastText"}} />
    </CardContent>
  </Card>
)

export default Note
