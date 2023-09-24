import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ item }) {
  console.log(item);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.iata_from} -------- {item.iata_to}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          From-{item.airport_from} To-{item.airport_to}  <br />
          Airline-{item.airline_name}({item.airline_code})
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          common-duration: {item.common_duration}
          <br />
          common-max-duration: {item.max_duration}
          <br />
          common-min-duration: {item.min_duration}
        </Typography>
        <Typography variant="body2">
          Flights per day-{item.flights_per_day}
          <br />
          Flights per week-{item.flights_per_week}
        </Typography>
      </CardContent>
    </Card>
  );
}
