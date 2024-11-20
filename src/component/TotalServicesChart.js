import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Completed", "Ongoing", "Pending"],
  datasets: [
    {
      data: [16, 0, 84],
      backgroundColor: ["#66BB6A", "#FFCA28", "#EF5350"],
    },
  ],
};

const options = {
  // responsive: false, // Disable responsiveness
  maintainAspectRatio: false, // Prevent Chart.js from maintaining aspect ratio
};

export default function TotalServicesChart() {
  return (
    <div>
      <Box
        sx={{
          height: "8vh",
          backgroundColor: "#fd7569",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px", // Add top and bottom margin for better spacing
          borderRadius: "8px", // Match rounded corners with card4bo
        }}
      >
        <Typography variant="body1" color="white" sx={{ fontSize: "1rem" }}>
          Service Till Date: 259198
        </Typography>
      </Box>

      <Card
        sx={{
          backgroundColor: "#faebd7",
          border: "1px solid #000",
          borderRadius: "8px",
          padding:'16px'
        }}
      >
        <CardContent>
          <Typography
            color="#000"
            align="center"
            sx={{ marginBottom: 2, fontWeight: "bold" }}
          >
            TOTAL SERVICES
          </Typography>

          <div
            style={{
              width: "300px", // Fixed width
              height: "300px", // Fixed height
              margin: "0 auto", // Center the chart
            }}
          >
            <Pie data={data} options={options} />
          </div>

          <Typography
            color="#000"
            align="center"
            sx={{ marginTop: 2, fontWeight: "bold" }}
          >
            Total Services: 100
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
