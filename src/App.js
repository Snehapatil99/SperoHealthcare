import React,{useState} from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import DashboardHeader from './component/DashboardHeader';
import DashboardControls from './component/DashboardControls';
import DashboardCards from './component/DashboardCards';
import TotalServicesChart from './component/TotalServicesChart';
import ProfessionalsAvailabilityChart from './component/ProfessionalsAvailabilityChart';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import ServiceDetailsChart from './component/ServiceDetails';
import PaymentCollectedChart from './component/PaymentCollectedChart';


Chart.register(ArcElement, Tooltip, Legend);

function App() {
  const [selectfilter, setSelectFilter] = useState("today");
  console.log(selectfilter,"selectfilter DashboardCarts");

  const chooseFilter = (filter) => {
    console.log("Selected filter:", filter);
    setSelectFilter(filter); 
  };
  return (
    // <FilterProvider>
    <Container 
      maxWidth="xl" 
      sx={{ 
        padding: 2, 
        minHeight: '100vh', 
        overflowX: 'hidden', 
        width: '100vw' 
      }}
    >
      <Box mb={3}>
        <DashboardHeader />
      </Box>

      <Box mb={3}>
      <DashboardControls filter={selectfilter} chooseFilter={chooseFilter} />
      </Box>

      <Grid container spacing={3} mb={1}>
        <Grid item xs={12} md={8}>
          <DashboardCards />
        </Grid>
        <Grid item xs={12} md={4}>
          <PaymentCollectedChart />
        </Grid>
      </Grid>

      <Grid container spacing={1} mb={12}>
        <Grid item xs={1} md={4}>
        <ServiceDetailsChart filter={selectfilter} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TotalServicesChart />
        </Grid>
        <Grid item xs={12} md={4} >
          <ProfessionalsAvailabilityChart />
        </Grid>
      </Grid>

      {/* Footer */}
      <Box textAlign="center" mt={4} mb={2}>
        <Typography variant="body2" color="textSecondary">
          Powered by Spero 2023
        </Typography>
      </Box>
    </Container>
    // </FilterProvider>
  );
}

export default App;
