// xây dựng hàm callback có đối số,
// rest parameter
function something(callback, ...args) {
  console.log("Something");
  if (typeof callback == "function") {
    callback(...args); //spread operator
  }
}
something(
  function (a, b, c) {
    console.log("F8");
    console.log(a, b, c);
  },
  "Js",
  "react",
  "php"
);
