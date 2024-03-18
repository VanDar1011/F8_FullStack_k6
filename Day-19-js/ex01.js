var content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos esse quas deleniti culpa animi exercitationem fuga quam qui cum praesentium cumque labore rem, voluptate ab sequi, tempore hic! Corporis at in doloribus culpa excepturi quia molestias id ex accusamus!";
var string_content = content.replaceAll(" ", "</span> <span>");
string_content = `<span>${string_content}</span>`;
var i = 0;
setInterval(function () {
  var currentChar = string_content.charAt(i);
  var nextChar = string_content.charAt(i + 1);
  if (currentChar == ">" && nextChar != " ") {
    var html =
      string_content.slice(0, i) + ` class="red"` + string_content.slice(i);
    document.body.innerHTML = html;
  }

  if (i > string_content.length) {
    i = 0;
  } else {
    i++;
  }
}, 30);
