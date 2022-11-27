import React, { useRef, useState, useContext } from "react";
import "../../css/Form.css";
import Canvas from "../../components/Canvas";
import { userContext } from "../../userContext";
import EffectService from "../../services/EffectService";

const EffectUploadPage = (props) => {
  const effectNameInput = useRef();
  const htmlInput = useRef();
  const [html, sethtml] = useState("");
  const [htmlString, sethtmlString] = useState("");
  const { stateUser } = useContext(userContext);
  const service = new EffectService();


  async function submitHandler(event) {
    event.preventDefault();
    let data = [];
    if (stateUser != undefined) {
      data = {
        effectName: effectNameInput.current.value,
        effectContent: htmlString,
        subjectId: stateUser.user.sub,
        creatorName: stateUser.user.name,
      };
    }
    props.reloadCallback(false);
    try {
      await service.createEffect(data);
      props.reloadCallback();
    }
    catch {
    }
  }

  function SetString(Html) {
    sethtmlString(Html);
  }

  return (
    <div data-testid="effectUploadPage-1">
      <Canvas fileInput={html} htmlStringCallback={SetString} finalString={htmlString}></Canvas>
      <div className="formBody">
        <form className="form" onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">
              EffectFile
              <input
                data-testid="htmlInput-1"
                className="form-control"
                type="file"
                accept=".html"
                id="EffectFile"
                ref={htmlInput}
                onChange={(e) => {
                  sethtml(
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

          <button type="submit" className="btn btn-primary" data-testid="submitButton-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EffectUploadPage;
