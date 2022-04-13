import React, { FC, useState } from 'react';
import S from './Button.module.css';

interface Props {
  title?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const Button: FC<Props> = ({ onClick, className: externalClass, disabled }) => {
  const [active, setActive] = useState(false);
  
  const clickHandler = () => {
    setActive(!active);
    onClick?.();
  };

  const getClassNames = () => {
    const currentStyle = disabled ? S.disabled : active ? S.blue : S.red;
    return `${externalClass} ${S.initial} ${currentStyle}`;
  };

  return (
    <button className={getClassNames()} onClick={clickHandler} disabled={disabled}>
      Change color to {active ? 'red' : 'blue' }
    </button>
  );
};

export default Button;