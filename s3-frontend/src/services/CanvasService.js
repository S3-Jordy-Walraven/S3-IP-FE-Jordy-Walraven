class CanvasService {
  getHtmlText(html, callback) {
    if (html !== "") {
      var r = new FileReader();
       (r.onload = function (e) {
        var contents = e.target.result;
        callback(contents);
      });

      r.readAsText(html);
    }
  }
}

export default CanvasService;
