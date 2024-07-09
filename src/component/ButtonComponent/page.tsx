import React, { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import "./buttoncomponent.scss";

// Accept HTML button attributes
type ButtonComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string;
};
function ButtonComponent({ buttonText, ...props }: ButtonComponentProps) {
  return (
    <>
      <Button {...props}>
        <p>{buttonText}</p>
      </Button>
    </>
  );
}

export default ButtonComponent;
