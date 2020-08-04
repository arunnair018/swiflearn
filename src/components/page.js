import React, { useState } from "react";
import Navbar from "./navbar";
import Videos from "./videos";
import Class from "./classes";

const Page = () => {
  const [classNumber, setclassNumber] = useState(5);

  const handleChange = (n) => {
    setclassNumber(n);
  };
  return (
    <div className='page'>
      <Navbar />;
      <Videos classno={classNumber} />
      <Class setclass={handleChange} />
    </div>
  );
};

export default Page;
