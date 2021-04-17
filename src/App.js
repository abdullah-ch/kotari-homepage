import React from "react";
import CardsBox from "./Components/CardsBox/CardsBox";
import Sidebar from "./Components/Simpleaccordion/Sidebar";
import { Grid } from "@material-ui/core";

// const styles = makeStyles((theme) => ({
//   sideBar: {
//     [theme.breakpoints.only("xs")]: {
//       display: "none",
//     },
//   },
// }));

function App() {
  //  const classes = styles();
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={10} direction="row">
        <Grid className={classes.sideBar} item lg={3}>
          <Sidebar />
        </Grid>

        <Grid item lg={9} md={12} sm={12}>
          <CardsBox />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
