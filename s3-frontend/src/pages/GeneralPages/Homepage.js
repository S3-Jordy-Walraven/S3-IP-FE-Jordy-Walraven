import React from "react";
import EffectTableComponent from "../../components/EffectComponents/Table/EffectTableComponent";


const Homepage = (props) => {
  return (
    <div data-testid="homepage-1">
      <div>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Signify</h1>
      </div>
      <EffectTableComponent effects={props.allEffects} />
    </div>
  );
};

export default Homepage;
