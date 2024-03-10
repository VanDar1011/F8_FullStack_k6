function checkInteger(number) {
  var count = 0;
  for (var i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return 1;
  } else return 0;
}
// var number = 111;
function returnInteger() {
  var number = document.getElementById("num").value;
  if (number < 2) {
    document.getElementById(
      "return_integer"
    ).innerHTML = `${number} không là số nguyên tố`;
    // console.log(`${number} không là số nguyên tố`);
  } else {
    var i = checkInteger(number);
    if (i == 1) {
      // console.log(`${number} là số nguyên tố`);
      document.getElementById(
        "return_integer"
      ).innerHTML = `${number}  là số nguyên tố`;
    } else {
      // console.log(`${number} không là số nguyên tố`);
      document.getElementById(
        "return_integer"
      ).innerHTML = `${number} không là số nguyên tố`;
    }
  }
}
