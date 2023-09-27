import React, {forwardRef, InputHTMLAttributes, Ref} from "react";

import classes from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
