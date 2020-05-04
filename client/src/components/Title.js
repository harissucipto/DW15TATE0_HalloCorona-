import React from "react";
import { pink } from "@material-ui/core/colors";

const Title = ({ text, ...props }) => {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        fontSize: "1.4em",
        lineHeight: "5em",
        color: pink[200],
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
