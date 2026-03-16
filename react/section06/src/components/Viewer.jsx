import { useState } from "react";

const Viewer = ({ count }) => {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
