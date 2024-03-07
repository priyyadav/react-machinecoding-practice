import React, { useMemo, useState } from 'react';

const Memo = () => {
  const [data, setData] = useState(0);
  const increment = () => setData(data + 1);
  const decrement = () => setData(data - 1);


  let value=useMemo(()=>
  {

    console.log("Calculating value...");
    for (let i = 0; i < 100000000; i++) {} 
    return data;

  },[data])
 

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {value}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Memo;
