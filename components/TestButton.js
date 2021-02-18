import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const TestButton = styled(Button)`
  color: red;
`;

/**
 * A button that has red text.
 *
 * @param {string} text - Text of the button
 */
export default ({ text }) => <TestButton>{text}</TestButton>;
