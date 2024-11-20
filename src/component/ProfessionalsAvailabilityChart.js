import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { ArcElement, Tooltip, Legend, Chart } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export default function ProfessionalsAvailabilityChart({ filter }) {
  const [assignedProfessionals, setAssignedProfessionals] = useState({
    today: 0,
    this_month: 0,
    total: 0,
  });
  const [unassignedProfessionals, setUnassignedProfessionals] = useState({
    today: 0,
    this_month: 0,
    total: 0,
  });

  // Fetch data from the API
  useEffect(() => {
    axios
      .get(`http://122.176.232.35:8008/web/professional-count/?${filter}`)
      .then((response) => {
        const { assigned_professionals, unassigned_professionals } =
          response.data;

        setAssignedProfessionals(assigned_professionals);
        setUnassignedProfessionals(unassigned_professionals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [filter]);

  const chartData = {
    datasets: [
      {
        data: [assignedProfessionals.total, unassignedProfessionals.total],
        backgroundColor: ["#42A5F5", "#FF7043"],
      },
    ],
  };

  return (
    <>
      {/* In Process and Pending Cards */}
      <Grid container spacing={1} sx={{ marginBottom: 1 }}>
        <Grid item xs={6}>
          <Card
            sx={{
              backgroundColor: "#fbbd0",
              border: "1px solid #000",
              borderRadius: "10px",
            }}
          >
            <CardContent sx={{ padding: "5px" }}>
              <Typography align="center" sx={{ color: "#000" }}>
                {assignedProfessionals.today}
              </Typography>
              <Typography align="center" sx={{ color: "green" }}>
                In Process
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              backgroundColor: "#fbbd0",
              border: "1px solid #000",
              borderRadius: "10px",
            }}
          >
            <CardContent sx={{ padding: "5px" }}>
              <Typography align="center" sx={{ color: "#000" }}>
                {unassignedProfessionals.today}
              </Typography>
              <Typography align="center" sx={{ color: "red" }}>
                Pending
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Professionals Availability Card with Doughnut Chart */}
      <Card
        sx={{
          backgroundColor: "#fbbd0",
          border: "1px solid #000",
          padding: "8px",
          borderRadius: "10px",
        }}
      >
        <CardContent sx={{ paddingBottom: 1 }}>
          <Typography
            variant="h6"
            color="primary"
            align="center"
            sx={{ marginBottom: "8px" }}
          >
            PROFESSIONALS AVAILABILITY
          </Typography>

          <div
            style={{
              width: "250px", // Fixed width
              height: "250px", // Fixed height
              margin: "0 auto", // Center the chart
            }}
          >
            <Doughnut data={chartData} />
          </div>
          <Box mt={1} align="center">
            <Typography
              variant="body2"
              sx={{ color: "#000", marginBottom: "4px" }}
            >
              Total Professionals:{" "}
              {assignedProfessionals.total + unassignedProfessionals.total}
            </Typography>

            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#42A5F5",
                    borderRadius: "50%",
                    marginRight: "4px",
                  }}
                />
                <Typography variant="body2" sx={{ color: "#000" }}>
                  Assigned
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#000", marginLeft: "10px" }}
                >
                  {assignedProfessionals.total}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#FF7043",
                    borderRadius: "50%",
                    marginRight: "4px",
                  }}
                />
                <Typography variant="body2" sx={{ color: "#000" }}>
                  Unassigned
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#000", marginLeft: "10px" }}
                >
                  {unassignedProfessionals.total}
                </Typography>
              </Box>
            </Box>

            {/* Assigned and Unassigned Values in Same Column */}
            {/* <Box mt={2} display="flex" justifyContent="space-around">
              <Box textAlign="center">
                <Typography variant="subtitle1" sx={{ color: '#42A5F5' }}>Assigned</Typography>
                <Typography variant="h6" sx={{ color: '#000' }}>{assignedProfessionals.total}</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="subtitle1" sx={{ color: '#FF7043' }}>Unassigned</Typography>
                <Typography variant="h6" sx={{ color: '#000' }}>{unassignedProfessionals.total}</Typography>
              </Box>
            </Box> */}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
