import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color: color, // colorのみでもOK
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
