/*
Câu lệnh rẽ nhánh
if(condition) {
    code
}
if(conditon){
    code đúng
}else {
    code sai
}
if(conditon 1){
    code 1
} else if(condition 2){
    code 2
} else if(condition 3){
    code 3
} else {
    code 5
}
if(condition 1){
    if(condition 1.1){
code 1.1
    } else {
code 1.2
    }
}
*/
// var a = 10;
// if (true == a) {
//   console.log("Đúng");
//   console.log("Sai");
// }
// tính lương thực nhận của một nhân viên %
// lương <= 5 triệu thì không mất thuế,lương > 5 và <-15tr :3%, trên 15tr,:5%
var salaray = 7000000;
var income = 0;
var tax = 0;
if (salaray <= 5000000) {
  //   income = salaray;
  tax = 0;
} else if (salaray > 5000000 && salaray <= 15000000) {
  //   income = salaray - salaray * (3 / 100);
  tax = 3;
} else {
  //   income = salaray - salaray * (5 / 100);
  tax = 5;
}
income = salaray - (salaray * tax) / 100;
console.log(income);
/* switch ( case ) {
    case value:
        
        break;

    default:
        break;
}
*/

// switch (action) {
//   case "1":
//   case "2":
//     console.log("Thêm");
//     break;
//   case "edit":
//     console.log("Sửa");
//     break;
//   default:
//     console.log("Other");
//     break;
// }
var action = "abc";

if (action === "create" || action === "add" || action === "insert") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}
/*
tính số ngày trong tháng 
*/
// tháng là số nguyên
var month = "7";
// console.log(typeof month);
// month =+mohth;
// console.log(typeof month);

var year = 2024;
var day = 0;
// var day1 = 0;
if (month % 1 == 0 && month > 0 && month < 13) {
  console.log(typeof month);

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 2:
      if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            // alert(year + " is a leap year");
            day = 29;
          } else {
            // alert(year + " is NOT a leap year");
            day = 28;
          }
        } else {
          //   alert(year + " is a leap year");
          day = 29;
        }
      } else {
        // alert(year + " is NOT a leap year");
        day = 28;
      }
      //   day = 28;
      //   day1 = 29;
      break;
    default:
      day = 30;
  }

  console.log(`Tháng ${month} năm ${year} có ${day} day`);
} else {
  console.log("Không phải định dạng tháng");
  console.log("Vui lòng nhập lại");
}
