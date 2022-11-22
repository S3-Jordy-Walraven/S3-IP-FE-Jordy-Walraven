import React from "react";
import EffectTableComponent from "../components/Table/EffectTableComponent";


const Homepage = (props) => {
  return (
    <div>
      <div>
      <h1 style={{textAlign:"center", marginTop:"20px"}}>Signify</h1>
      </div>
   
      <EffectTableComponent effects={props.allEffects} />
    </div>
  );
};

export default Homepage;
