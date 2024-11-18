import React, { useState } from 'react';
import { Box, Tab, Tabs, MenuItem, Select } from '@mui/material';
// import { useFilter } from './FilterContext'; // Import the context hook

export default function DashboardControls({ filter, chooseFilter }) {
  // const { filter, changeFilter } = useFilter(); // Destructure both filter and changeFilter from context
  const [selectedTab, setSelectedTab] = useState(0); 
  const [selectedHospital, setSelectedHospital] = useState('');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue); 
    const tabType =
      newValue === 0
        ? 'total_completed_today'
        : newValue === 1
        ? 'total_completed_this_month'
        : 'total_completed_till_date';
    
        chooseFilter(tabType); // Update the filter context value
  };

  const handleHospitalChange = (event) => {
    setSelectedHospital(event.target.value);
  };

  return (
    <div style={{ width: '100vw', margin: "10px" }}>
      <Box display="flex" justifyContent="space-between" p={2} bgcolor="#9acd32">
        <Tabs
          value={selectedTab} // Ensure value is correctly set to the current selected tab
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              backgroundColor: '#9acd32',
              borderRadius: '5px',
              marginRight: 2,
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#00C6C6',
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
          sx={{ width: '20%', backgroundColor: 'white', borderRadius: '5px', right: "40%" }}
        >
          <MenuItem value="">Select Hospital</MenuItem>
          <MenuItem value="hospital1">Hospital 1</MenuItem>
          <MenuItem value="hospital2">Hospital 2</MenuItem>
        </Select>
      </Box>
    </div>
  );
}
