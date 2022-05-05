import React, { useEffect, useState } from 'react';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onChange: (value:boolean) => void;
}

export default function Checkbox({onChange}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const checkboxChange = () =>  {
    setIsSelected( !isSelected );
    onChange( !isSelected );
  };

  useEffect(() => {
    onChange(isSelected);
  }, [isSelected]);
  

  return (
    <input role="checkbox" type="checkbox" className="cursor-pointer" style={{width: 25, height: 25}} checked={isSelected} onChange={checkboxChange} />
  );
}
