import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const cardsData = [
  { title: "Total Enquiry", value: 6, color: "#6a1b9a" },
  { title: "Converted", value: 2, color: "#d32f2f" },
  { title: "In follow up", value: 0, color: "#0288d1" },
  { title: "Cancelled", value: 0, color: "#fbc02d" },
  { title: "Pending", value: 4, color: "#00796b" }
];
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
export default function DashboardCards() {
  return (
    <Grid container spacing={1} mt={1}>
      <Grid item xs={4} md={12}>
        <Card sx={{  backgroundColor: '#faebd7', border: '1px solid #000', borderRadius: '10px',
            }}>
          <CardContent>
            <Grid container spacing={1}>
              {cardsData.map((card, index) => (
                <Grid item xs={4} sm={1} md={2.4} key={index}>
                  <Card
                    sx={{
                      backgroundColor: card.color,
                      color: '#fff',
                      borderRadius: '10px',
                      height: '90%', // Adjusted height for compact view
                      // display: 'flex',
                      // justifyContent: 'center',
                      // alignItems: 'center',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', }}>
                      <Typography variant="body2">{card.title}</Typography>
                      <Typography variant="h5">{card.value}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>     
      </Grid>
  );
}
