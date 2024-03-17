// closure
// windown là tối tượng
// biến trong đối tượng là thuộc tính
// hàm trong đối tượng là phương thức
// cú pháp truy cập: tendoituong.tenthuoctinh,tendoituong.tenphuongthuc;
// var a = 10;
// function getA() {
//   return a;
// }
// console.log(window.a);
// console.log(window.getA());
// window.alert(11);
// window.f8 = {};
// window.f8.getA = function () {
//   return "flk";
// };
// console.log(window.f8.getA());

// Closure: là một hàm có thể truy cập vào các thuộc tính / biến của các phạm vi chứa nó
// thunk
// biến toàn cục, tham số hàm cha, biến cục bộ hàm cha, tham số chính nó, biến cục bộ chính nó
// var a = 10;
// function something(c) {
//   console.log(a);
//   var b = 20;
//   function display() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   display();
// }
// something("f8");
function display(a) {
  return function (b) {
    return a + b;
  };
}
var result = display("f9");
console.log(result("Js"));
function sum(a) {
  console.log(`a:${a}`);
  return function (b) {
    return a + b;
  };
}
var add = sum(10);
console.log(10);
console.log(20);
console.log(40);
var b = sum;
//iife
console.log("da");
(function (text) {
  console.log("hello");
  console.log(text);
})("dat");

