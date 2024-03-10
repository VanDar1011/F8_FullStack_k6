function sum(n) {
  if (n == 1) {
    return 1;
  } else if (n > 1) {
    return sum(n - 1) + 1 / n;
  }
}
function Caculator() {
  var n = document.getElementById("num").value;
  var result = sum(n);
  document.getElementById("result").innerHTML = result;
}
