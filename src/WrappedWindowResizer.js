import React from "react";
import withResizer from "./withResizer";

const WrappedWindowResizer = ({ width, height }) => (
  <div>
    <p> Window width: {width}</p>
    <p> Window height: {height}</p>
  </div>
);

export default withResizer(WrappedWindowResizer);
