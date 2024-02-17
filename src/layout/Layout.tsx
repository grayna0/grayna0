import React from "react";
import Header from "./Header";
import Point from "../compoent/Point";
const WrappedPage = ({ children }: { children: React.ReactElement }) => {
  
 

  return (
    <div className="main">
      <Header/>
      <div
        className="container"
        onWheel={(e) => {
          window.scrollBy(e.deltaY * 21, e.deltaY * 21);
        }}

      >
        {children}
      </div>
      <Point />
    </div>
  );
};

export default WrappedPage;
