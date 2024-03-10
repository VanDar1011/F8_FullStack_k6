function tinhtien() {
  var input_km = document.getElementById("km");
  var km = input_km.value;
  if (km == "") {
    km = 0;
  }
  console.log("SỐ km đã đi " + km + " km");
  // var km = 121;
  const price_1 = 15000;
  const price_2 = 13500;
  const price_3 = 11000;
  const discount = 10 / 100;
  var amount = 0;
  if (km <= 1) {
    amount = km * price_1;
    //   console.log("1");
  } else if (1 < km && km <= 5) {
    amount = price_1 + price_2 * (km - 1);
    //   console.log("2");
  } else {
    amount = price_1 + price_2 * 4 + (km - 5) * price_3;
    if (km > 120) {
      amount -= amount * discount;
    }
    //   console.log("3");
  }
  document.getElementById("price").innerHTML = amount;
  //   console.log(amount);
}
