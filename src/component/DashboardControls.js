import React, { useState } from "react";
import { Box, Tab, Tabs, MenuItem, Select } from "@mui/material";
// import { useFilter } from './FilterContext'; // Import the context hook

export default function DashboardControls({ filter, chooseFilter }) {
  // const { filter, changeFilter } = useFilter(); // Destructure both filter and changeFilter from context
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedHospital, setSelectedHospital] = useState("");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    const tabType =
      newValue === 0
        ? "total_completed_today"
        : newValue === 1
        ? "total_completed_this_month"
        : "total_completed_till_date";

    chooseFilter(tabType); // Update the filter context value
  };

  const handleHospitalChange = (event) => {
    setSelectedHospital(event.target.value);
  };

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Box
        display="flex"
        justifyContent="flex-start"
        flexWrap="wrap"
        p={1}
        bgcolor=" #6aa5eb"
        margin={1}
        borderRadius={5}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            backgroundColor: "white",
            marginLeft:'3%',
            padding: '5px',
            borderRadius: "16px",
            "& .MuiTab-root": {
              backgroundColor: "white",
              borderRadius: "16px",
              color: "black",
              fontWeight: "bold",
              margin: "0 2px",
              textTransform: "none", // Optional for avoiding uppercase text
            },
            "& .Mui-selected": {
              backgroundColor: " #6aa5eb", // Green color for active tab
              color: "white !important",
            },
            "& .MuiTabs-indicator": {
              display: "none", // Hide the default indicator
            },
          }}
        >
          <Tab label="Today" />
          <Tab label="This Month" />
          <Tab label="Last Month" />
        </Tabs>

        <Select
          value={selectedHospital}
          onChange={handleHospitalChange}
          displayEmpty
          sx={{
            width: {
              xs: "100%", // Full width on extra-small screens (mobile)
              sm: "50%",  // 50% width on small screens
              md: "20%",  // 20% width on medium and larger screens
            },
            backgroundColor: "white",
            borderRadius: "5px",
            marginTop:{ xs:2,md:0 },
            marginLeft: { xs: 0, md: "15%" }, // Adjust margin for mobile and desktop
          }}
        >
          <MenuItem value="">Select Hospital</MenuItem>
          <MenuItem value="hospital1">Hospital 1</MenuItem>
          <MenuItem value="hospital2">Hospital 2</MenuItem>
        </Select>
      </Box>
    </div>
  );
}
