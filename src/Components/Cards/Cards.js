import image from "../../Assets/pic.jpg";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./Cards.module.css";
import Stars from "../Stars/Stars";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
  },
  text: {
    textAlign: "center",
    color: "#333333",
  },
  textCardBottom: {
    display: "flex",
    justifyContent: "center",
  },

  textPrice: { color: "#333333" },

  textStrike: { margin: "0px 10px 0px 10px" },

  textDiscount: { color: "#ff6a6a" },

  stars: {
    position: "absolute",
    color: "#ff6a6a",
  },
  image: {
    "&:hover": {},
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
    <Card
      onMouseEnter={handleToggleHoverIn}
      onMouseLeave={handleToggleHoverOut}
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          image={image}
          title="Contemplative Reptile"
          className={classes.image}
        />
        {/* here when I hover over my <Stars/> and  <FavoriteBorderIcon/>, the hover effect of opacity that I have on
            my Card's image, simply gets removes
             */}
        {showComponent ? (
          <div>
            <FavoriteBorderIcon
              fontSize="large"
              style={{ position: "absolute", top: "5px", right: "5px" }}
            />
            <Stars />
          </div>
        ) : null}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.text}
          >
            Printed round Neck
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
            className={classes.textCardBottom}
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component="b"
              className={classes.textPrice}
            >
              Rs. 454
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="strike"
              className={classes.textStrike}
            >
              Rs. 699
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="span"
              className={classes.textDiscount}
            >
              (35 % off)
            </Typography>
            {/* <p>
              <b>Rs. 454</b>
              <strike>Rs. 699</strike>
              <span style={{ color: "#FF7F7F" }}> (35 % off) </span>
            </p> */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    // <div className={styles.container}>
    //   <Card
    //     onMouseEnter={handleToggleHoverIn}
    //     onMouseLeave={handleToggleHoverOut}
    //     className={classes.root}
    //   >
    //     <div id={styles.imageCentre}>
    //       <CardMedia
    //         component="img"
    //         alt=""
    //         className={styles.image}
    //         image={image}
    //         title="Contemplative Reptile"
    //       />
    //       <h1>Helooooooooooooo</h1>
    //       {/* here when I hover over my <Stars/> and  <FavoriteBorderIcon/>, the hover effect of opacity that I have on
    //          my Card's image, simply dissapears.
    //         */}

    //       {showComponent ? (
    //         <div className={styles.opaqueHover}>
    //           <div id={styles.stars}>
    //             <Stars />
    //           </div>
    //           <FavoriteBorderIcon fontSize="large" id={styles.heart} />
    //         </div>
    //       ) : null}
    //     </div>

    //     <CardActionArea>
    //       <CardContent>
    //         <Typography
    //           gutterBottom
    //           variant="h5"
    //           component="h2"
    //           id={styles.textCentre}
    //         >
    //           Printed round Neck
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //           <div class="text">
    //             <p id={styles.price}>
    //               <b>Rs. 454</b>
    //               <strike>Rs. 699</strike>
    //               <span style={{ color: "#FF7F7F" }}> (35 % off) </span>
    //             </p>
    //           </div>
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    // </div>
  );
};

export default Cards;
