import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const TestButton = styled(Button)`
  color: red;
`;

export default () => <TestButton>Hello World</TestButton>;
