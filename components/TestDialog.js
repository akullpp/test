import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import TestButton from "./TestButton";

/**
 *  Simple dialog that allows to cancel or accept.
 *
 *  @param {boolean} open - Whether the component is shown or not
 *  @param {function} toggleDialog - Toggles the display status of the component
 */
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
      <TestButton onClick={toggleDialog} color="secondary" text="Cancel" />

      <TestButton
        onClick={toggleDialog}
        color="primary"
        text="Confirm"
        autoFocus
      />
    </DialogActions>
  </Dialog>
);
