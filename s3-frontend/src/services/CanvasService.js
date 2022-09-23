class CanvasService {
  getHtmlText(html, callback) {
    let returnval = "";
    if (html != "") {
      var r = new FileReader();
      var x = (r.onload = function (e) {
        var contents = e.target.result;
        callback(contents);
      });

      r.readAsText(html);
    }
  }
}

export default CanvasService;
