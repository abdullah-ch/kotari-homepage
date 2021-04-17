import React from "react";
import Cards from "../Cards/Cards";
import { Grid } from "@material-ui/core";

const CardsBox = () => {
  return (
    <Grid container justify="center" direction="row">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Grid>
  );
};

export default CardsBox;
