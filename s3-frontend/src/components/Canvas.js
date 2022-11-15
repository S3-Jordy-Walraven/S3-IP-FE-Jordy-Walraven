import React, { useEffect } from "react";
import CanvasService from "../services/CanvasService";
import "../css/Canvas.css"

const Canvas = (props) => {
  var cService = new CanvasService();
  function GetHtml(content) {
    if (content === false) {
      cService.getHtmlText(props.fileInput, GetHtml);
    } else {
      console.log(content)
      var head = content.split("</head>")[0].replace(`\\`,"");
      var metaProp = head.split("property")
      var vars = [];
      var metaDefaults = head.split("default");
      var defaultValues = [];
      var types = head.split("type");
      var typeValues = [];
      for (var i = 0; i < metaProp.length; i++) {
        if (i !== 0 ) 
          vars.push(metaProp[i].split(`="`)[1].split('"')[0]);
      }
      console.log(metaDefaults)
      for (let index = 0; index < metaDefaults.length; index++) {
        if (index !== 0)
          defaultValues.push(metaDefaults[index].split(`="`)[1].split('"')[0]);
      }
      for (let index = 0; index < types.length; index++) {
        if (index !== 0)
          typeValues.push(types[index].split(`="`)[1].split('"')[0]);
      }
      var num = content.split("<script>")[0].length + 8;
      var script = content.substring(0, num);
      vars.forEach((element, i) => {
        if(typeValues[i] === "number"){
          script += `var ${element} =  ${defaultValues[i]}\n `
        } else{
          script += `var ${element} =  "${defaultValues[i]}"\n `
        }
  
      });
      var html = script + content.substring(num, content.length);

      props.htmlStringCallback(html);
    }
  }

  useEffect(() => {
    console.log(props.fileInput)
    if (props.fileInput)
      GetHtml(false);
  }, [props.fileInput]);

  useEffect(() => {

  }, [props.finalString]);



  return (
    <div id="wrap">
      <iframe title="canvas" id="scaled-frame" srcDoc={props.finalString}  sandbox="allow-scripts " width="100%" height={100} >
      </iframe>
    </div>
  );
};

export default Canvas;
