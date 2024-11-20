import React, { useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import DashboardHeader from "./component/DashboardHeader";
import DashboardControls from "./component/DashboardControls";
import DashboardCards from "./component/DashboardCards";
import TotalServicesChart from "./component/TotalServicesChart";
import ProfessionalsAvailabilityChart from "./component/ProfessionalsAvailabilityChart";
import { ArcElement, Tooltip, Legend, Chart } from "chart.js";
import ServiceDetailsChart from "./component/ServiceDetails";
import PaymentCollectedChart from "./component/PaymentCollectedChart";
import "./App.css";

Chart.register(ArcElement, Tooltip, Legend);

function App() {
  const [selectfilter, setSelectFilter] = useState("today");
  console.log(selectfilter, "selectfilter DashboardCarts");

  const chooseFilter = (filter) => {
    console.log("Selected filter:", filter);
    setSelectFilter(filter);
  };
  return (
    <div className="app">
      <div style={{ width: "100%" }}>
        <DashboardHeader />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          overflow: "auto",
          overflowX: "hidden",
        }}
      >
        <div style={{ width: "100%" }}>
          <DashboardControls
            filter={selectfilter}
            chooseFilter={chooseFilter}
          />
        </div>
        <div
        className="columnContainer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            className="column1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div className="dashboardCard">
              <DashboardCards />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className="ChartBox">
                <ServiceDetailsChart filter={selectfilter} />
              </div>
              <div className="ChartBox">
                <TotalServicesChart />
              </div>
            </div>
          </div>
          <div
            className="column2"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div className="paymentChart">
              <PaymentCollectedChart />
            </div>
            <div className="ProfessionalsAvailabilityChart">
              <ProfessionalsAvailabilityChart filter={selectfilter} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Powered by Spero 2023</div>
    </div>
  );
}

export default App;
