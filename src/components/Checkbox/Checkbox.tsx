import React, { FC, useEffect, useState } from "react";

interface Props {
  checked?: boolean;
  onClick?: () => void;
}

const Checkbox: FC<Props> = ({ onClick, checked }) => {
  const [xChecked, setxChecked] = useState(false);
  
  const clickHandler = () => {
    setxChecked(!xChecked);
    onClick?.();
  };

  useEffect(() => {
    setxChecked(checked ?? false);
  }, [checked])
  

  return (
    <input type="checkbox" onClick={clickHandler} checked={xChecked} />
  );
};

export default Checkbox;