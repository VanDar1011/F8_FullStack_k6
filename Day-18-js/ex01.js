// bài tâp về số N số fibonaci
// c1: loop
// function generateFibonacci(n) {
//   fib_numbers = [1, 1];
//   if (n <= 0) {
//     fib_numbers = [];
//   } else if (n == 1) {
//     fib_numbers = [1];
//   } else if (n == 2) {
//     return fib_numbers;
//   } else {
//     for (var i = 2; i < n; i++) {
//       fib_numbers.push(fib_numbers[i - 1] + fib_numbers[i - 2]);
//     }
//   }
//   return fib_numbers;
// }
// var n = 0;
// console.log(`${n} số fibonacci cần tạo là:${generateFibonacci(n)}`);
// c2 : khong loop
function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fib_sequence = fibonacci(n - 1);
    fib_sequence.push(
      fib_sequence[fib_sequence.length - 1] +
        fib_sequence[fib_sequence.length - 2]
    );
    return fib_sequence;
  }
}
var n1 = 20;
console.log(`${n1} số fibonacci cần tạo là:${fibonacci(n1)}`);

// bài tập đảo ngược số
//c1: lặp

var n = 34053059;
var string_n = n.toString();
var reversed = "";
for (var i = string_n.length - 1; i >= 0; i--) {
  reversed += string_n[i];
}
console.log(`Số ${n} đảo ngược thành ${reversed}`);
// bài tập chuyển số thành chữ
function numberToString(n) {
  stringNumber = "";
  if (n >= 0 && n <= 9999) {
    const units = [
      "",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
    ];
    var thousand = Math.floor(n / 1000);
    n %= 1000;
    var hundred = Math.floor(n / 100);
    n %= 100;
    var ten = Math.floor(n / 10);

    var unit = n % 10;
    // console.log(thousand);
    // console.log(hundred);
    // console.log(ten);
    // console.log(unit);
    // if (thousand > 0) {
    //   stringNumber += `${units[thousand]} ngàn `;
    // }
    // if (hundred > 0) {
    //   stringNumber += `${units[hundred]} trăm `;
    // }
    // if (ten > 0) {
    //   stringNumber += `${units[ten]} `;
    // }
    // if (unit > 0) {
    //   stringNumber += `${units[unit]}`;
    // } else {
    //   stringNumber += `mươi`;
    // }
    if (thousand > 0) {
      stringNumber += `${units[thousand]} ngàn `;
      if (hundred == 0 && ten == 0 && unit == 0) {
        stringNumber += ``;
        console.log(stringNumber);
        return;
      } else {
        if (hundred > 0) {
          stringNumber += `${units[hundred]} trăm `;
        } else {
          stringNumber += `không trăm `;
        }
        if (ten > 0) {
          stringNumber += `${units[ten]} `;
        } else {
          stringNumber += `linh `;
        }
        if (unit > 0) {
          stringNumber += `${units[unit]}`;
        } else {
          stringNumber += `mươi`;
        }
      }
    }
    // co hang ngan
    else {
      if (hundred > 0) {
        stringNumber += `${units[hundred]} trăm `;
        if (ten == 0 && unit == 0) {
          //   stringNumber += ``;
          //   console.log(stringNumber);
          //   return;
        } else {
          if (ten > 0) {
            if (ten == 1) {
              stringNumber += `mười `;
              if (unit == 0) {
                // return;
              } else {
                // stringNumber += `mười `;
                stringNumber += `${units[unit]}`;
                // return;
              }
            } else {
              stringNumber += `${units[ten]} `;
              if (unit > 0) {
                stringNumber += `${units[unit]}`;
              } else {
                stringNumber += `mươi`;
              }
            }
            // stringNumber += `${units[ten]} `;
          }
          // co hang chuc
          else {
            stringNumber += `linh `;
            if (unit > 0) {
              stringNumber += `${units[unit]}`;
            }
          }
        }
      }
      // co hang tram
      else {
        if (ten > 0) {
          if (ten == 1) {
            stringNumber += `mười `;
            if (unit == 1) {
              stringNumber += `một`;
            } else {
              stringNumber += `${units[unit]}`;
            }
          } else {
            stringNumber += `${units[ten]} `;

            if (unit > 0) {
              if (unit == 1) {
                stringNumber += `mốt`;
              } else {
                stringNumber += `${units[unit]}`;
              }
            } else {
              stringNumber += `mươi`;
            }
          }
        } else {
          if (unit == 0) {
            stringNumber += `không`;
          }
          stringNumber += `${units[unit]}`;
        }
        //else {
        //     stringNumber += `linh `;
        //   }
      } // khong co hang tram
    }
    // khong co hang ngan

    console.log(stringNumber);
  } else {
    console.log("khongo dooi");
  }
}
// for (var i = 0; i < 9999; i++) {
//   console.log(i);
//   numberToString(i);
// }
numberToString(1);
numberToString(100);
numberToString(7090);
