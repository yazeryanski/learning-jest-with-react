import React, { FC, useState } from "react";
import S from './Button.module.css';

interface Props {
  title?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<Props> = ({ title, onClick, className: externalClass }) => {
  const [active, setActive] = useState(false);
  
  const clickHandler = () => {
    setActive(!active);
    onClick?.();
  };

  const getClassNames = () => {
    const currentStyle = active ? S.blue : S.red;
    return `${externalClass} ${currentStyle} ${S.initial}`;
  };

  return (
    <button className={getClassNames()} onClick={clickHandler}>
      Change color to {active ? 'red' : 'blue' }
    </button>
  );
};

export default Button;