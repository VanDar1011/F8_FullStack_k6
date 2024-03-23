// bài 1: tìm giao giữa hai chuỗi
console.log("Bai tap 1");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arrC = arrA.filter(function (item, index) {
  return arrB.includes(item);
});

console.log(arrC);
// bài 2: làm phẳng mảng
console.log("Bai tap 2");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var newarr = [];
function flat(a, b) {
  a.forEach(function (item) {
    if (Array.isArray(item)) {
      b.concat(flat(item, b));
    } else b.push(item);
  });
}
flat(arr, newarr);
console.log(newarr);
// bai 3: tách theo đúng kiểu dữ liệu
console.log("Bài tập 3");
var arr3 = [
  ["a", 1, true],
  ["b", 2, false],
];
var arrayString = [];
var arrayNum = [];
var arrayBoolean = [];
var resultArr = [];
function separate(a) {
  a.forEach(function (item) {
    console.log(`item:${item}`);
    if (Array.isArray(item)) {
      item.forEach(function (item1) {
        console.log(`item1:${item1}`);
        if (typeof item1 === "string") {
          arrayString.push(item1);
        } else if (typeof item1 === "number") {
          arrayNum.push(item1);
        } else if (typeof item1 === "boolean") {
          arrayBoolean.push(item1);
        }
      });
    }
  });
}
separate(arr3);
resultArr.push(arrayString, arrayNum, arrayBoolean);
console.log(arrayBoolean);
console.log(arrayNum);
console.log(arrayString);
console.log(resultArr);
// bài tập 4: đổ dữ liệu
console.log("Bài tập 4");
const content = [
  [
    "./img.png",
    "Tiêu đề bài viết 1",
    ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id incidunt ipsum. Blanditiis illum fugiat
    sequi, reiciendis rerum corporis eaque maiores repellendus consequatur harum nisi totam incidunt dolorum vel
    sapiente!`,
  ],
  [
    "./img.png",
    "Tiêu đề bài viết 2",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id incidunt ipsum. Blanditiis illum fugiat
    sequi, reiciendis rerum corporis eaque maiores repellendus consequatur harum nisi totam incidunt dolorum vel
    sapiente!`,
  ],
  [
    "./img.png",
    "Tiêu đề bài viết 3",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id incidunt ipsum. Blanditiis illum fugiat
    sequi, reiciendis rerum corporis eaque maiores repellendus consequatur harum nisi totam incidunt dolorum vel
    sapiente!`,
  ],
  [
    "./img.png",
    "Tiêu đề bài viết 4",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id incidunt ipsum. Blanditiis illum fugiat
    sequi, reiciendis rerum corporis eaque maiores repellendus consequatur harum nisi totam incidunt dolorum vel
    sapiente!`,
  ],
];
var display = "";
content.forEach(function (item, index) {
  var item = `<div class= "item ${index % 2 === 1 ? "right" : ""}">
  <div class="img-box">
  <img src="${item[0]}">
  </div>
  <div class="infor">
  <h2>${item[1]}</h2>
  <p>${item[2]}</p>
  </div>
  </div>`;
  display += item;
});
var html = `<div class="container">${display}
</div>`;
console.log(display);
document.write(html);
