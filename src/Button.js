import React from "react";
import classnames from "classnames";
import "./Button.scss";

function Button({ children, disabled, size, variant }) {
  return (
    <button className={classnames("root", variant, size, { disabled })}>
      {children}
    </button>
  );
}

export default Button;
