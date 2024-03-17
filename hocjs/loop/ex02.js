// vòng lặp while loop
/* while( điều kiện){
    câu lệnh
} b1: chương trình sẽ kiểm tra điều kiện 
+ đúng :chuyển qua b2
+ sai : bỏ qua
b2: thực thi câu lệnh trong vòng lặp
b3: quay lại bước 1
b4: khi điều kiện sai thì thoát vòng lặp
- Các tình huống dùng while: không xác định được số lần lặp 
- Tìm số lần xuất hiện của một từ khóa trong một đoạn văn bản
- Xác định một phần tử DOM theo một selector nào đó(Có phân cấp)
*/
var i = 1;
while (i <= 10) {
  console.log(`i = ${i}`);
  i++;
}
do {
  console.log(i);
  i++;
} while (i < 20);
// kiểm tra số nguyên tố
/* điều kiện số nguyên tố
+ lớn hơn 1
+ chỉ chia hết cho 1 và chính nó

*/
var n = 11;
var isPrime = true;
if (n <= 1) {
  isPrime = false;
} else {
  //   for (i = 2; i <= Math.sqrt(n); i++) {
  //     if (n % i == 0) {
  //       isPrime = false;
  //       break;
  //     }
  //   }
  // var i = 2;
  // while (n % i != 0 && i < n) {
  //   i++;
  //   isPrime = false;
  // }
}
if (isPrime) {
  console.log("số nguyên tố");
} else {
  console.log("không phải số nguyên tố");
}
// Math.sqrt(n);
for (var i = 5; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(`i = ${i}`);
}
// break; thoát vòng lặp
// continue; bỏ qua lần lặp
