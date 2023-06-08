import React from "react";
import { Table } from "semantic-ui-react";

const StockTable = () => {
  const tableData = [
    {
      month: "January",
      number_of_trades: 28041,
      remarks:
        "Increased investor optimism due to positive earnings reports and new product launches.",
    },
    {
      month: "June",
      number_of_trades: 23250,
      remarks:
        "Industry-wide trend of increasing consumer demand for sustainable and eco-friendly products.",
    },
    {
      month: "November",
      number_of_trades: 18210,
      remarks:
        "Investor caution amid uncertainties surrounding global economic growth and inflation.",
    },
    {
      month: "December",
      number_of_trades: 17987,
      remarks:
        "Year-end portfolio rebalancing and profit-taking by institutional investors.",
    },
  ];

  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Remarkable months in Stock Trading Prices in Nestle India
      </h3>
      <Table
        compact
        size="small"
        style={{ fontSize: "14px", border: "2px solid black" }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Month</Table.HeaderCell>
            <Table.HeaderCell>Number of Trades</Table.HeaderCell>
            <Table.HeaderCell>Remarks</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableData.map((row, index) => (
            <Table.Row
              key={index}
              style={{
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
              <Table.Cell>{row.month}</Table.Cell>
              <Table.Cell>{row.number_of_trades}</Table.Cell>
              <Table.Cell>{row.remarks}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StockTable;
