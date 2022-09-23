import React, { useRef, useState } from "react";
import "../css/Form.css";
import Canvas from "../components/Canvas";

const EffectUploadPage = () => {
  const effectNameInput = useRef();
  const htmlInput = useRef();
  const [html, sethtml] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Canvas fileInput={html}></Canvas>
      <div className="formBody">
        <form className="form" onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">
              EffectFile
              <input
                className="form-control"
                type="file"
                accept=".html"
                id="EffectFile"
                ref={htmlInput}
                onChange={(e) => {
                  const selectedFile = sethtml(
                    document.getElementById("EffectFile").files[0]
                  );
                }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Effect name
              <input
                type="Effect Name"
                className="form-control"
                id="effectName"
                ref={effectNameInput}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EffectUploadPage;
