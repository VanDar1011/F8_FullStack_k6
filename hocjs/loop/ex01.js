/* vòng lặp trong lập trình
for(khởi tạo; điều kiện; bước nhảy)
 */
// for (var i = 1; i <= 10; i += 2) {
//   console.log(i + " Lần lặp ");
// }
// for (var i = 10; i > 0; i -= 2) {
//   console.log(i + " Lần lặp");
// }
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log("Lần lặp " + i + "-" + j);
//   }
// }
var n = 0;
// var sum = 0;
// for (var i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);
// var tich = 1;
// for (var i = 0; i <= 2; i++) {
//   console.log(i);
//   tich *= i;
// }

// console.log(tich);
var sum = 1;
var acumulation = 1;
// S= 1 + 1 *2 +1*2 *3+...+ 1*2*3*4*5;
for (var i = 2; i <= 5; i++) {
  acumulation *= i;
  sum += acumulation;
}
console.log(sum);
