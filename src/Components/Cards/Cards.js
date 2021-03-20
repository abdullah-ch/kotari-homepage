import image from "../../Assets/pic.jpg";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./Cards.module.css";
import Stars from "../Stars/Stars";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Cards = () => {
  const [showComponent, setShowComponent] = useState(false);
  const classes = useStyles();

  const handleToggleHoverIn = (event) => {
    event.preventDefault();
    setShowComponent(true);
  };

  const handleToggleHoverOut = (event) => {
    event.preventDefault();
    setShowComponent(false);
  };

  console.log("The state showComponent value is ", showComponent);

  return (
    <div className={styles.container}>
      <Card
        onMouseEnter={handleToggleHoverIn}
        onMouseLeave={handleToggleHoverOut}
        className={classes.root}
      >
        <CardActionArea>
          <div id={styles.imageCentre}>
            <CardMedia
              component="img"
              alt=""
              className={styles.image}
              image={image}
            />

            {showComponent ? (
              <>
                <div id={styles.stars}>
                  <Stars />
                </div>
                <FavoriteBorderIcon fontSize="large" id={styles.heart} />
              </>
            ) : null}
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              id={styles.textCentre}
            >
              Printed round Neck
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <div className={styles.bottomContent}>
                <p id={styles.price}>
                  <b>Rs. 454</b>
                  <strike>Rs. 699</strike>
                  <span style={{ color: "#FF7F7F" }}> (35 % off) </span>
                </p>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Cards;
