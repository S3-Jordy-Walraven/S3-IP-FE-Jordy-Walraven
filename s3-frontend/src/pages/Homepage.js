import React, { useEffect, useState } from "react";
import EffectTableComponent from "../components/Table/EffectTableComponent";
import EffectService from "../services/EffectService";


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
