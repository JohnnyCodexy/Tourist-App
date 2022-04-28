import TourCard from "../TourCard";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

import cities from "../data.json";
import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div className="App">
      <Container>
        {cities.map((city) => (
          <React.Fragment>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
};
export default Home;
