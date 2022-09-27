import React, { useEffect, useRef } from "react";
import CanvasService from "../services/CanvasService";
import sanitizeHtml from "sanitize-html";

const Canvas = (props) => {
  var canvas;
  var ctx;
  var cService = new CanvasService();

  const divRef = useRef();
  var insertScript;
  function GetHtml(content) {
    if (content == false) {
      cService.getHtmlText(props.fileInput, GetHtml);
    } else {
      props.htmlStringCallback(content);
      insertScript = "";
      var scripts = content.split("<script>");
      scripts.forEach((element, i) => {
        if (i != 0) insertScript += "<script>" + element;
      });
      const fragment = document
        .createRange()
        .createContextualFragment(insertScript);

      divRef.current.append(fragment);
    }
  }

  function renderCanvas(props) {
    if (window.innerWidth != canvas.width) {
      canvas.style.width = `${window.innerWidth}px`;
    }

    if (window.innerHeight != canvas.height) {
      canvas.style.height = `${window.innerHeight}px`;
    }
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  useEffect(() => {
    canvas = document.getElementById("exCanvas");
    if (canvas != null) {
      canvas.width = 320;
      canvas.height = 200;
      ctx = canvas.getContext("2d");
      window.requestAnimationFrame(renderCanvas);
    }
  }, []);

  useEffect(() => {
    var holder = document.getElementById("ScriptHolder");
    GetHtml(false);
  }, [props.fileInput]);

  useEffect(() => {
    if (props.fileInput != "") {
      console.log(insertScript);
    }
  }, [insertScript]);

  return (
    <div>
      <canvas
        id="exCanvas"
        className="zindex-fixed position-absolute m-0 position-absolute"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
      <div id="ScriptHolder" ref={divRef}></div>
    </div>
  );
};

export default Canvas;
