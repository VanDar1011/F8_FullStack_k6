function Caculator() {
  var n = document.getElementById("num").value;
  var sum = 0;
  // var n = 115;
  var tich = 1;
  for (var i = 1; i <= n; i++) {
    tich = i * (i + 1);
    sum += tich;
  }
  document.getElementById("result").innerHTML = sum;
  // console.log(sum);
}
