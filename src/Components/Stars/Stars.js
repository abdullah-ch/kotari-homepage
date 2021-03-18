import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function Stars() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        {/* <Typography component="legend">Controlled</Typography> */}
        <Rating
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            marginTop: "50%",
            color: "#ffce26",
          }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      {/*<Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box> */}

      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
      </Box> */}
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Pristine</Typography>
        <Rating name="pristine" value={null} />
      </Box> */}
    </div>
  );
}
