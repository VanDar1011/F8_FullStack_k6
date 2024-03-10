var string = "";
var box = "";
for (var i = 1; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    box += `${i} * ${j} = ` + j * i + " ;";
    box += "<br>";
  }
  string += `<div class="box">${box}</div>`;
  box = "";
}
//   string = `<div class="box">${string}</div>`;
document.write(`<div class="container">${string}</div>`);
