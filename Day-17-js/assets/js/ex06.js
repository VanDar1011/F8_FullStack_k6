var string = "";
for (var i = 1; i <= 8; i++) {
  if (i % 2 == 1) {
    for (var j = 1; j <= 8; j++) {
      if (j % 2 == 1) {
        string += "<div class='white'></div>";
      } else string += "<div class='black'></div>";
    }
  } else {
    for (var j = 1; j <= 8; j++) {
      if (j % 2 == 1) {
        string += "<div class='black'></div>";
      } else string += "<div class='white'></div>";
    }
  }
}
document.write(`<div class="container">${string}</div>`);
