// Bài tập 1: Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất tron mảng và tìm vị trí
console.log("bài 1");
var array1 = [1, 4, 1, 5, 5, 3, 5];
var lengArray1 = array1.length;
var positionMax = 0;
var positionMin = 0;
var maxValue = array1[0];
var minValue = array1[0];
for (var i = 1; i < lengArray1; i++) {
  if (array1[i] >= maxValue) {
    maxValue = array1[i];
    positionMax = i;
  }
  if (array1[i] <= minValue) {
    maxValue = array1[i];
    positionMin = i;
  }
}
var positionValueMax = [];
var positionValueMin = [];
for (i = 0; i < lengArray1; i++) {
  if (array1[i] === maxValue) {
    positionValueMax[positionValueMax.length] = i + 1;
  }
  if (array1[i] === minValue) {
    positionValueMin[positionValueMin.length] = i + 1;
  }
}
console.log(`Giá trị max là ${maxValue} tại vị trí ${positionValueMax}`);
console.log(`Giá trị min là ${minValue} tại vị trí ${positionValueMin}`);
console.log(`------------`);
// Bài 2: Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị "Không có số nguyên tố"
console.log("bài 2");

var array2 = [1, 2, 2, 3, 3];
var numberOfPrime = 0;
var returnPrime;
var averagePrime = 0;
var sumPrice = 0;
function checkPrime(number) {
  var count = 0;
  for (var i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return 1;
  } else return 0;
}
for (var i = 0; i < array2.length; i++) {
  if (array2[i] < 2) {
    continue;
  } else {
    returnPrime = checkPrime(array2[i]);
    if (returnPrime === 1) {
      numberOfPrime++;
      sumPrice += array2[i];
    }
  }
}
if (numberOfPrime === 0) {
  console.log("Không có số nguyên tố");
} else {
  //console.log(`Có ${numberOfPrime} số nguyên tố trong mảng ${array2}`);
  averagePrime = sumPrice / numberOfPrime;
  console.log(`Trung bình cộng các số nguyên tố ${averagePrime}`);
  console.log(`--------------------`);
}
// bài 3: Lọc trùng phần tử
console.log("bài 3");
var array3 = [1, 3, 3, 4, 4, 4, 4, 4, 4, 5];
var newArray3 = [array3[0]];
var count = 0;
for (var i = 1; i < array3.length; i++) {
  //   console.log(`Array3 ${i} : ${array3[i]}`);
  //   console.log("lengnew :" + newArray3.length);

  for (var j = 0; j < newArray3.length; j++) {
    // console.log(`NewArray3 ${j}: ${newArray3[j]}`);
    if (array3[i] !== newArray3[j]) {
      count++;
    }
    // console.log(count);
    if (count === newArray3.length) {
      newArray3[newArray3.length] = array3[i];
      break;
    }
  }

  count = 0;
}
array3 = newArray3;
console.log(`Chuỗi sau khi lọc trùng là : ${array3}`);
console.log(`---------`);
// bài 4: Sắp xếp tăng dần rồi chèn thêm phần tử
console.log("Bài 4");

// for (var i = 0; i < array4.length; i++) {
//   //   console.log(`value ${i}: ${array4[i]}`);
//   for (var j = i + 1; j < array4.length; j++) {
//     if (array4[j] <= array4[i]) {
//       currentElement = array4[j];
//       array4[j] = array4[i];
//       array4[i] = currentElement;
//     }
//   }
// }
function arrange(array4) {
  for (var i = 0; i < array4.length; i++) {
    //   console.log(`value ${i}: ${array4[i]}`);
    for (var j = i + 1; j < array4.length; j++) {
      if (array4[j] <= array4[i]) {
        currentElement = array4[j];
        array4[j] = array4[i];
        array4[i] = currentElement;
      }
    }
  }
  //   console.log(array4);
}
// console.log(`Chuỗi chỉ sắp xếp ${array4}`);

function findPosition(array4, addElement) {
  if (addElement >= array4[array4.length - 1]) {
    return -1;
  } else if (addElement <= array4[0]) {
    return 0;
  } else {
    for (var i = 0; i < array4.length; i++) {
      if (addElement >= array4[i] && addElement <= array4[i + 1]) {
        return i;
      }
    }
  }
}
function insertString(array4, addElement) {
  console.log(`Chuỗi ban đầu ${array4}`);
  arrange(array4);
  console.log(`Chuỗi chỉ sắp xếp ${array4}`);

  var position = findPosition(array4, addElement);
  if (position === -1) {
    array4[array4.length] = addElement;
  } else if (position === 0) {
    for (var i = array4.length; i >= 1; i--) {
      array4[i] = array4[i - 1];
    }
    array4[0] = addElement;
  } else {
    for (var i = array4.length; i >= position + 2; i--) {
      array4[i] = array4[i - 1];
    }
  }
  console.log(
    `Chuỗi sau khi chèn ${addElement} vào chuỗi đã sắp xếp ${array4}`
  );
}
var array4 = [1, 5, 4, 5, 2, 3];
var array4_1 = [1, 5, 4, 5, 2, 3];
var array4_2 = [1, 5, 4, 5, 2, 3];

// console.log(array4.length);
var currentElement;
var addElement = -9;
var addElement1 = 9;
var addElement2 = 3;

insertString(array4, addElement);
insertString(array4_1, addElement1);
insertString(array4_2, addElement2);

// var position = findPosition();
// if (position === -1) {
//   array4[array4.length] = addElement;
// } else if (position === 0) {
//   for (var i = array4.length; i >= 1; i--) {
//     array4[i] = array4[i - 1];
//   }
//   array4[0] = addElement;
// } else {
//   for (var i = array4.length; i >= position + 2; i--) {
//     array4[i] = array4[i - 1];
//   }
// }
// console.log(`Chuỗi sau khi chèn ${addElement} vào chuỗi đã sắp xếp ${array4}`);
