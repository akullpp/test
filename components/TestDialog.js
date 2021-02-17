import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import TestButton from "./TestButton";

export default ({ open, toggleDialog }) => (
  <Dialog open={open} onClose={toggleDialog}>
    <DialogTitle>Confirm</DialogTitle>

    <DialogContent>
      <DialogContentText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi
        rem corrupti labore veritatis! Laborum quos expedita quidem ullam
        maxime, cumque ipsum blanditiis voluptate, beatae sed eaque adipisci
        saepe unde.
      </DialogContentText>
    </DialogContent>

    <DialogActions>
      <TestButton onClick={toggleDialog} color="primary">
        Disagree
      </TestButton>

      <TestButton onClick={toggleDialog} color="primary" autoFocus>
        Agree
      </TestButton>
    </DialogActions>
  </Dialog>
);
