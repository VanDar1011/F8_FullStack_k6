function draw() {
  var n = document.getElementById("num").value;
  var string = "";
  var number = 1;
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      string += number++ + " ";
    }
    string += "<br>";
  }
  document.write(`<h2>${string}</h2>`);
}
