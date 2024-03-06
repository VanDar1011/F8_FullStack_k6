console.log("Bài 1 hoán vị hai số");
var a1 = 10;
var b1 = 13;
console.log("Hai số trước hoán vị là " + a1 + " " + b1);
b1 = a1 - b1;
a1 = a1 - b1;
b1 = a1 + b1;
console.log("Hai số sau khi hoán vị " + a1 + " " + b1);
console.log("Bài 2 thực hiện phép tính");
var S = 10 + 20 + 5 ** 10 / 2;
console.log("Kết quả của S với S = 10 + 20 + 5 ** 10 / 2 là " + S);
console.log("Bài 3 tìm số lớn nhất");

var a3 = 5;
var b3 = 7;
var c3 = 5;
console.log("Ba số đã cho lần lượt là " + a3 + " " + b3 + " " + c3);
if (a3 >= b3 && a3 >= c3) {
  console.log("Số lớn nhất là " + a3);
} else if (b3 >= a3 && b3 >= c3) {
  console.log("Số lớn nhất là " + b3);
} else {
  console.log("Số lớn nhất là " + c3);
}
var a;
console.log("Bài 4 kiểm tra số cùng dấu ");
var a4 = -9;
var b4 = 10;
if ((a4 > 0 && b4 > 0) || (a4 < 0 && b4 < 0)) {
  console.log(`Hai số ${a4} và ${b4} không cùng dấu`);
} else {
  console.log(`Hai số ${a4} và ${b4} không cùng dấu`);
}
console.log("Bài 5 số tăng dần");
var a5 = 10;
var b5 = 15;
var c5 = 24;
if (a5 >= b5 && b5 >= c5) {
  console.log(`Thứ tự sắp xếp là ${c5} ${b5} ${a5}`);
} else if (a5 >= c5 && c5 >= b5) {
  console.log(`Thứ tự sắp xếp là ${b5} ${c5} ${a5}`);
} else if (b5 >= c5 && c5 >= a5) {
  console.log(`Thứ tự sắp xếp là ${a5} ${c5} ${b5}`);
} else if (b5 >= a5 && a5 >= c5) {
  console.log(`Thứ tự sắp xếp là ${c5} ${a5} ${b5}`);
} else if (c5 >= a5 && a5 >= b5) {
  console.log(`Thứ tự sắp xếp là ${b5} ${a5} ${c5}`);
} else console.log(`Thứ tự sắp xếp là ${a5} ${b5} ${c5}`);
