import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PaymentCollectedChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Payment Collected",
        labelColor: "white",
        data: [
          500, 700, 800, 1500, 1200, 900, 1300, 1100, 1400, 1000, 1200, 1500,
        ],
        backgroundColor: "#adebeb",
        color: "white",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      labels: {
        color: "white",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // Set X-axis labels (month names) color to white
        },
        grid: {
          color: "#adebeb", // Set X-axis grid color (optional)
        },
      },
      y: {
        ticks: {
          color: "white", // Set Y-axis labels color to white
        },
        grid: {
          color: "#adebeb", // Set Y-axis grid color (optional)
        },
      },
    },
  };
  return (
    // <Grid item xs={9} md={4}>
    <Grid item xs={4} md={1}>
      <Card
        sx={{
          backgroundColor: "#6aa5eb",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "16vh",
          padding: 3,
          position: "relative", // Enable absolute positioning for "PAYMENT COLLECTED"
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          PAYMENT COLLECTED
        </span>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <span
            style={{ textAlign: "center", color: "white", fontSize: "1.5rem" }}
          >
            2500
          </span>
          <div
            style={{
              width: "100%",
              height: "16vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Bar data={data} options={options} style={{ width: "80vw" }} />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
