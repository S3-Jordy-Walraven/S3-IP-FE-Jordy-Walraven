import React, { useEffect } from "react";
import CanvasService from "../services/CanvasService";
import "../css/Canvas.css"

const Canvas = (props) => {
  let cService = new CanvasService();
  function GetHtml(content) {
    if (content === false) {
      cService.getHtmlText(props.fileInput, GetHtml);
    } else {

      let head = content.split("</head>")[0].replace(`\\`, "");
      let metaProp = head.split("property")
      let vars = [];
      let metaDefaults = head.split("default");
      let defaultValues = [];
      let types = head.split("type");
      let typeValues = [];
      for (let i = 0; i < metaProp.length; i++) {
        if (i !== 0)
          vars.push(metaProp[i].split(`="`)[1].split('"')[0]);
      }
      for (let index = 0; index < metaDefaults.length; index++) {
        if (index !== 0)
          defaultValues.push(metaDefaults[index].split(`="`)[1].split('"')[0]);
      }
      for (let index = 0; index < types.length; index++) {
        if (index !== 0)
          typeValues.push(types[index].split(`="`)[1].split('"')[0]);
      }


      let num = content.split("<script>")[0].length + 8;
      let script = content.substring(0, num);
      vars.forEach((element, i) => {
        if (typeValues[i] === "number") {
          script += `var ${element} =  ${defaultValues[i]}\n `
        } else {
          script += `var ${element} =  "${defaultValues[i]}"\n `
        }

      });
      let html = script + content.substring(num, content.length);

      props.htmlStringCallback(html);
    }
  }

  useEffect(() => {
    if (props.fileInput)
      GetHtml(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fileInput]);

  useEffect(() => {

  }, [props.finalString]);



  return (
    <div id="wrap">
      <iframe title="canvas" id="scaled-frame" srcDoc={props.finalString} sandbox="allow-scripts " width="100%" height={100} >
      </iframe>
    </div>
  );
};

export default Canvas;
