function tinhtien() {
  var input_kwh = document.getElementById("kwh");
  var kWh = input_kwh.value;
  const price_1 = 1.678;
  const price_2 = 1.734;
  const price_3 = 2.014;
  const price_4 = 2.536;
  const price_5 = 2.834;
  const price_6 = 2.927;
  var amount = 0;
  if (kWh <= 50) {
    amount = kWh * price_1;
  } else if (kWh <= 100) {
    amount = price_1 * 50 + (kWh - 50) * price_2;
  } else if (kWh <= 200) {
    amount = price_1 * 50 + 50 * price_2 + (kWh - 100) * price_3;
  } else if (kWh <= 300) {
    amount =
      price_1 * 50 + 50 * price_2 + 100 * price_3 + (kWh - 200) * price_4;
  } else if (kWh <= 400) {
    amount =
      price_1 * 50 +
      50 * price_2 +
      100 * price_3 +
      100 * price_4 +
      (kWh - 300) * price_5;
  } else {
    amount =
      price_1 * 50 +
      50 * price_2 +
      100 * price_3 +
      100 * price_4 +
      100 * price_5 +
      (kWh - 400) * price_6;
  }
  document.getElementById("price").innerHTML = amount;
}
// console.log(amount);
