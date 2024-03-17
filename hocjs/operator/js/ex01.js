/* toán tử trong js 
toán tử  - biểu thức 
toán từ + toán hạng = biểu thức 
ví dụ: a = b + c

1. toán tử số học 
+, - , * , /, %(dư), **
++ , -- , 
*/

// var a = 10;
// var b = 2;

// var c = a ** b;
// console.log(c);
// var count = 0;
// c = count++;
// count = 1;
// ++count;
// count--;
// --count;
// var result = count++ + ++count + count++ + 10;
// 1 count= 2
// 3 count=3
// 3 count=4

// var result = count++
// console.log(count++);
/*

*/
// var a = 1;
// var ac = ++a + a++ + --a + --a;
// test1 = 2;
// test1 = 2 + 2 + 2 + 1;

// console.log(ac);
// var b = 1;
// var dat = b++ + b++ + ++b + b++;
// 1 b = 2
// 2 b = 3
// 4 b = 4
// 4 b = 5
// var a = 4;
// var test = a++ + ++a + ++a + --a + a--;
/*
4 5
6 6
7 7
6 6 
6 5

*/
// console.log(test);
// console.log(dat);
// toán tử gán
// var a = 10;
// a += 5;
// console.log(a);
/* toán tử so sánh 
> < >= <= == 
=== so sánh cả giá trị và kiểu dữ liệu 
*/
// var a = 10;
// var b = a >= 10;
// console.log(b);
// toán tử kết hợp
// - && : và
// -|| : hoặc
// - ! : phủ định
// thứ tự ưu tiên, && , || !
// var a = 10;
// var b = a >= 5 || a <= 9;
// console.log(b);
// toán tử ba
// - cúp pháp : điều kiện ? giá trị đúng : giá trị sai
// var a = 10;
// var b = a >= 10 ? 20 : 0;
// console.log(b);
// var a = 10;
// var b = 20;
// var c = 30;
// var total = a + b + 10 + b >= 20 ? 5 : 10 + c;
// var a = 10;
// document.write(`${a >= 10 ? "Thảo mãn" : "Không thỏa mãn "}`);
// toán tử nullish(??){}
/* cú pháp : biến ?? giastri;
nếu biến = undefine || null, thì lấy sau ??, ngược lại thì lấy phía truóc
*/
// var a = null;
// var b = a ?? "không xác định";
// console.log(b);
var a = 0;
// var b = a == null || a == undefined ? "không tồn tại" : a;
var b = `${a == "null" || a == "undefined" ? "Không xác định" : a}`;
console.log(b);
// trythy, falsy
//&& , || trong biểu thức
// false, 0, '' (chuỗi rỗng), null, undefined, và NaN. Các giá trị còn lại được coi là truthy.
// &&: a = b && "f9" sau ep kieu :true thi sau, false thi hien thi chinh gia tri false do
// gặp false đầu tiên thì trả về false, còn không thì trả về cuối
// ||: a = b || "g0" thi lay cai cuoi cung neu false , gap true thi lay luôn
/*
7.truthy : các trường hợp không phải falsy thì là truthy 
7.falsy: trong trường hp cần chuyển về boolean mà giá trị chuyển về -->falsy
0, "", null, undefined, false, NaN

*/
var a = -0;
var s = a ? "datngo" : "datthao";
console.log(s);
/*
&&: tìm thằng sai
||: tìm thằng đúng

*/
var a = 10;
var b = 0;
var c = 0 || false || null;
console.log(c);
