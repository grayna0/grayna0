import React from "react";
import Header from "./Header";
import Point from "../compoent/Point";
const WrappedPage = ({ children }: { children: React.ReactElement }) => {
  
const windowWidth = window.innerWidth
console.log(windowWidth);

  return (
    <div className="main">
      <Header/>
      <div
        className="container"
        id="container"
        onWheel={(e) => {
          if(windowWidth > 400){
            window.scrollBy(e.deltaY * 21, e.deltaY * 21);
          }
        }}
        
        >
        {children}
      </div>
      <Point />
    </div>
  );
};

export default WrappedPage;
