import React, { useEffect, useState } from "react";
import EffectItem from "../EffectItem";

const EffectTableComponent = (props) => {
  const [Effects, setEffects] = useState([]);

  useEffect(() => {
    if (props.effects != null && props.effects !== undefined)
      if ("data" in props.effects) {
        if (Array.isArray(props.effects.data)) setEffects(props.effects.data);
        console.log(props.effects.data);
      } else {
        if (typeof props.effects === "object" && props.effects !== []) {
          try {
            props.effects.then((data) => {
              if (data !== undefined && "data" in data) setEffects(data.data);
            });
          } catch {}
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.effects]);

  useEffect(() => {}, [Effects]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        {Array.isArray(Effects) ? (
          Effects.map((effect) => (
            <div
              key={effect.id}
              className="col-md-2"
              style={{
                width: "400px",
                height: "300px",
                marginBottom: "40px",
              }}
            >
              <EffectItem effect={effect} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EffectTableComponent;
