import React, { FC } from "react";

interface Props {
  checked: boolean
  title: string
  onChange: () => void
}

const Checkbox: FC<Props> = ({ onChange, checked, title }) => {
  return (
    <label>
      <input type="checkbox" onChange={onChange} checked={checked} />
      {title}
    </label>
  );
};

export default Checkbox;