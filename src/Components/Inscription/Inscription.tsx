import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Inscription = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background: "#CCCCFF",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <Stack>
          <Typography variant="h5">Inscription</Typography>
          <TextField
            id="outlined-basic"
            label="Nom Complet"
            variant="outlined"
          />
          <TextField id="outlined-basi2" label="Email" variant="outlined" />
        </Stack>
      </div>
    </div>
  );
};

export default Inscription;
