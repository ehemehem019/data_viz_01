import React from "react";
import { Card } from "semantic-ui-react";

const description = [
  "The total number of trades for Nestle India in the Year 2021 is 296,843",
].join(" ");

const CardComponent = () => (
  <Card
    style={{
      width: "40%",
      padding: "30px",
      border: "2px solid black",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
    }}
  >
    <Card.Content
      header={<h2 style={{ fontSize: "22px", fontWeight: "bold" }}>296,843</h2>}
    />
    <Card.Content description={description} />
  </Card>
);

export default CardComponent;
