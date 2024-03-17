// callback: Xử lí tác vụ bất đồng bộ( chạy đồng thời)
/* 
chạy đồng thời

*/
var getA = function (callback) {
  setTimeout(function () {
    console.log("A");
    callback();
  }, 1000);
};
var getB = function (callback) {
  setTimeout(function () {
    console.log("B");
    callback();
  }, 500);
};

var getC = function () {
  setTimeout(function () {
    console.log("C");
  }, 1500);
};
// getA(function () {
//   getB(function () {
//     getC();
//   });
// });
// getA(getB);
//check hell js đon luồng, bất đồng bộ , java đa luồng
