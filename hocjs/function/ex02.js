/*
Hàm ẩn danh: anonymus function, lambda function 
function () {
  
} 
Để dùng được hàm ẩn danh
- gán vào 1 biến
- gọi thông qua hàm khác 
- iife function (Immediately Invoked Function Expression)
*/
// 1.expression function

var getMessage = function () {
  console.log("Hello anh em");
};
getMessage();
var showMessage = function msg() {
  console.log("Học js không khó");
};
showMessage();
function getA(func) {
  console.log("Get A");
  func();
}
getA(function () {
  console.log("get B");
});
