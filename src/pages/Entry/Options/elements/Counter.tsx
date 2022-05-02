import React, { useState } from 'react';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onChange: (count:number) => void;
}

export default function Counter({onChange}: Props) {
  const [count, setCount] = useState(0);
  const MAX_COUNT = 10;
  
  const changeCount = ( {target: {value}}: React.ChangeEvent<HTMLInputElement>) =>  {
    // if value bigger than MAX_COUNT we return MAX_COUNT
    const filteredValue = +value > 10 ? 10 : +value;
    
    setCount( filteredValue );
    onChange( filteredValue );
  };

  return (
    <input role="counter" type="number" value={count} onInput={changeCount} min="0" max={ MAX_COUNT } />
  );
}
