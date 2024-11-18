import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Completed', 'Ongoing', 'Pending'],
  datasets: [
    {
      data: [16, 0, 84],
      backgroundColor: ['#66BB6A', '#FFCA28', '#EF5350']
    }
  ]
};

export default function TotalServicesChart() {
  return (
    <div>
      <Box
        sx={{
          height: '60px', 
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '8px 0', // Add top and bottom margin for better spacing
          borderRadius: '4px', // Match rounded corners with card4bo
        }}
      >
        <Typography variant="body1" color="white" sx={{ fontSize: '1rem' }}>
          Service Till Date: 259198
        </Typography>
      </Box>

      <Card sx={{ backgroundColor: '#faebd7', border: '1px solid #000', borderRadius: '8px',       
         top:"40px"
 }}>
        <CardContent>
          <Typography variant="h6" color="primary" align="center" sx={{ marginBottom: 2 }}>
            TOTAL SERVICES
          </Typography>

          <Pie data={data} />

          <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
            Total Services: 100
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
