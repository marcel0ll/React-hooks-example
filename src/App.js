import React from "react";
import Container from "./Container";

import WrappedWindowResizer from "./WrappedWindowResizer";
import WithResizerClass from "./WithResizerClass";
// import FunctionResizer fro./FunctionResizer-bkup-3zer';

function App() {
  return (
    <Container>
      <WithResizerClass />
      <WrappedWindowResizer />
      {/* <FunctionResizer /> */}
    </Container>
  );
}

export default App;
