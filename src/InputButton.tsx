import * as React from "react";
import { Input, Button } from "antd";
import InputButtonStyles from "./InputButton.less";

export const style = InputButtonStyles;

interface InputButtonProps {
  placeholder: string;
}

const InputButton = ({ placeholder }: InputButtonProps) => (
  <div>
    <Input placeholder={placeholder} />
    <Button>Submit</Button>
  </div>
);

export default InputButton;
