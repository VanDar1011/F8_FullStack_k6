// baì 1: tìm số nguyên tố liền tiếp gần nhất
console.log(`baì 1: tìm số nguyên tố liền tiếp gần nhất`);
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else {
    for (var i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}

// console.log(isPrime(8));
function symmetricalBumber(n) {
  var reverse = n.toString().split("").reverse().join("");
  if (n.toString().includes(reverse)) {
    return true;
  }
  return false;
}
// console.log(`datngo ${symmetricalBumber(101)}`);
// console.log(symmetricalBumber(8));
function nextPrime(n) {
  var i = n;
  while (isPrime(i) === false || symmetricalBumber(i) === false) {
    i++;
  }
  return i;
}
var n = 13;
console.log(`Số nguyên tố gần nhất của ${n} là :${nextPrime(n)}`);
// bài 2: tính trung vị
console.log(`Bài 2: Tính trung vị`);
function middleOfArray(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  //   console.log(mergedArray);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    return mergedArray[middleIndex];
  }
}

// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];
const array1 = [1, 3];
const array2 = [2];
console.log(
  `Trung vị của hai mảng ${array1}, ${array2} là: ${middleOfArray(
    array1,
    array2
  )}`
);
// bài 3
console.log(`So nguyen duong nho nhat trong mang khong cos trong mang`);
function findMixInteger(array) {
  var i = 1;
  while (array.includes(i)) {
    i++;
  }
  return i;
}
var numbs = [7, 8, 9, 11, 12];

console.log(
  `So nguyen duong nho nhat trong mang khong cos trong  ${numbs} la ${findMixInteger(
    numbs
  )}`
);
