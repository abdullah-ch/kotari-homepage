import React from "react";
import Cards from "../Cards/Cards";
import { makeStyles, Grid } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {},
}));

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
