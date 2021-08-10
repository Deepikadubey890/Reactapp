import React from "react";



import { FaSistrix } from "react-icons/fa";
import TrendsKeywords from "./TrendsKeywords";
const Trends = () => {
  return (
    
    <div className="trends">
   
      <div className="trends__search">
      <div id="create__btns">
          <a href="" >Create Account</a>
         
        </div>
  
        <input
          type="text"
          className="trend__control"
          placeholder="Search "/>
        <div className="trend__icon">
          <FaSistrix className="search" />
       </div>
    </div>
    <TrendsKeywords/>
  

    </div>
    
 

    
  );
 
};

export default Trends;