import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

function TabPanel(props) {
  const {children, value, index, ...other} = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleSelectChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{borderBottom: 1, borderColor: "divider"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {Array.from({length: 20}, (_, index) => (
            <Tab key={index} label={`Item ${index + 1}`} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{my: 2, display: "flex", justifyContent: "center"}}>
        <Select value={value} onChange={handleSelectChange} displayEmpty inputProps={{"aria-label": "Select Tab"}} sx={{minWidth: 120}}>
          {Array.from({length: 20}, (_, index) => (
            <MenuItem key={index} value={index}>
              {`Item ${index + 1}`}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {Array.from({length: 20}, (_, index) => (
        <TabPanel key={index} value={value} index={index}>
          {`Item ${index + 1}`}
        </TabPanel>
      ))}
    </Box>
  )
}
