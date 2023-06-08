import React, { useState } from "react";
import AppNavbar from "../src/components/AppNavbar";
import LineChart from "../src/components/LineChart";
import PieChart from "../src/components/PieChart";
import BarChart from "../src/components/BarChart";
import "./App.css";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserData } from "./Data";
import CardComponent from "./components/CardComponent";
import StockTable from "./components/StockTable";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Number of Trades",
        data: UserData.map((data) => data.trade_no),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "rgba(75,192,192,0.7)",
          "#bdc3c7",
          "#438070",
          "#e1a714",
          "#194c8a",
          "rgba(75,192,192,0.4)",
          "#95a5a6",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div
      className={`App ${nightMode ? "night-mode" : ""}`}
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2
        style={{
          fontSize: "40px",
          padding: "10px",
          fontFamily: "'Open Sans', sans-serif",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        Historical Stock Price Data of Nestle India: 2021
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "500px", padding: "8px" }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: "500px", padding: "8px" }}>
          <LineChart chartData={userData} />
        </div>
        <div style={{ width: "500px", height: "400px", padding: "8px" }}>
          <PieChart chartData={userData} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "500px", padding: "8px" }}>
          <StockTable />
        </div>
        <div style={{ width: "900px", padding: "50px" }}>
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
