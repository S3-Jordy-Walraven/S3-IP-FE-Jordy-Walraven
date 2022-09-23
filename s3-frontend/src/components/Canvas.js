import React, { useEffect } from "react";
import CanvasService from "../services/CanvasService";

const Canvas = (props) => {
  var canvas;
  var ctx;
  var totalX = 0;
  var totalY = 0;
  var cService = new CanvasService();

  function GetHtml(content) {
    if (content == false) {
      cService.getHtmlText(props.fileInput, GetHtml);
    } else {
      console.log(content);
    }
  }

  function renderCanvas(props) {
    if (window.innerWidth != canvas.width) {
      canvas.style.width = `${window.innerWidth}px`;
    }

    if (window.innerHeight != canvas.height) {
      canvas.style.height = `${window.innerHeight}px`;
    }

    totalX = canvas.clientWidth;
    totalY = canvas.clientHeight;
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(renderCanvas);
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
    GetHtml(false);
  }, [props.fileInput]);

  return (
    <div>
      <canvas
        id="exCanvas"
        className="zindex-fixed position-absolute m-0 position-absolute"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </div>
  );
};

export default Canvas;
