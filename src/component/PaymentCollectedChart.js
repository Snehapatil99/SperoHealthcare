import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PaymentCollectedChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Payment Collected',
        data: [500, 700, 800, 1500, 1200, 900, 1300, 1100, 1400, 1000, 1200, 1500],
        backgroundColor: '#00C6C6',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Payment Collected',
      },
    },
  };
  return (
    // <Grid item xs={9} md={4}>
      <Grid item xs={4} md={1}>
        <Card
          sx={{
            backgroundColor: '#4682b4',
            borderRadius: '10px',
            height: '190px',
            width: "420px",
            // right: "50px",
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CardContent >
            <Typography variant="h9" color="black" align="center" justifyContent="center" left="10px">PAYMENT COLLECTED</Typography>
            <Typography variant="h4" align="center">2500</Typography>
            <Bar data={data} options={options} />
          </CardContent>
        </Card>
      </Grid>
    // </Grid>

  );
}
