"use strict";









// function getCount(num) {
//   console.log(num);
//   // getCount(num-1);
//   let number = num - 1;

//   if ((num-1) > 0) {
//     getCount(num - 1);
//   }

// }


// getCount(4);




// function getSumOfNumbers(num) {
//   let sum = 0;

//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }

//   console.log(sum);

// }

// getSumOfNumbers(4);





// function getSumOfNumbers(num) {
//   if (num == 1) {
//     return num;
//   }
//   else {
//     return num * getSumOfNumbers(num - 1);
//   }
// }


// console.log(getSumOfNumbers(4));




//foreach, forIn, forOf, map.





// function getFactorial(num) {
//   if (num == 1) {
//     return num;
//   }
//   else {
//     return num * getFactorial(num - 1);
//   }
// }

// console.log(getFactorial(3));





// let numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach((element, index/* ,arr */) => {
// console.log(`Index: ${index} Element: ${element}`);

//   numbers[index] = element * 2;
// });

// console.log(numbers);


// for (const item of numbers) {
//   console.log(item);
// }



// let user1 = {
//   name: "Gultac",
//   surname: "Seferova",
//   age: 18,
// email:
// }

// let user2 = {
//   name: "Lale",
//   surname: "Quliyeva",
//   age: 25,
// email:
// }

// let user3 = {
//   name: "Novreste",
//   surname: "Aslanzade",
//   age: 25,
// email:
// }


// let users = [user1, user2, user3];

// for (let item of users) {
// for (const key in item) {
// if (item.age > 20) {
// console.log(key + "/" + item[key]);
// console.log(`${item.name} ${item.surname}`);
// }
// }
// }




// for (const item of users) {
//   for (const key in item) {

//     if (key == "surname") {
//       console.log(key + "/" + item[key]);
//     }

//   }
// }





// users.forEach((element, index) => {
//   for (const key in element) {
//     console.log(key + "/" + element[key] + "/" + index);
//   }
// });




// console.log(typeof users);



// for (const key in user) {
//   console.log(key + "/" + user[key]);
// }



// let arr1 = [1, 2, 3, 4];

// console.log(arr1);

// let arr2 = arr1;

// arr2[0] = 100;

// console.log(arr1);





// let nums = [, 2, 3, 4, 6, 8, 9, 11];

// let copyArr = [...nums];

// console.log(copyArr);

// let stu = {
//   name: "Anar",
//   surname: "Huseynov"
// }


// let copyObj = { ...stu }

// console.log(copyObj);



// let result = nums.map(m => {
//   return m * 2;
// })

// console.log(nums);
// console.log(result);



// function getNumbers(n, m, ...arr) {
//   for (const item of arr) {
//     console.log(item + "/" + n);
//   }
// }

// getNumbers(1, 2, 3, 4, 5);




// let user1 = {
//   name: "Gultac",
//   surname: "Seferova",
//   age: 18,
// email:
// }

// let user2 = {
//   name: "Lale",
//   surname: "Quliyeva",
//   age: 25,
// email:
// }

// let user3 = {
//   name: "Novreste",
//   surname: "Aslanzade",
//   age: 25,
// email:
// }

// let users = [user1, user2, user3]

// const showAvarageByAge = (arr) => {

//   let sumOfAge = 0;

//   for (const item of arr) {
//     sumOfAge += item.age;
//   }

//   return /* Math.ceil( */sumOfAge / arr.length/* ) */;

// }

// console.log(showAvarageByAge(users));




// function getRondomInt(max) {
//   return Math.floor(Math.random() * max)
// }

// console.log(getRondomInt(10));



// const checkOdd = (num) => num % 2 == 1;
// const checkEven = (num) => num % 2 != 1;
// const checkThanFive = (num) => num > 5;



// console.log(checkOdd(5));

// console.log(5==54);




// function sumOfNumbersByCondition(arr, calback1, callback2) {

//   let sum1 = 0;

//   let sum2 = 0;

//   for (const item of arr) {
//     if (calback1(item)) {
//       sum1 += item;
//     }
//   }

//   for (const item of arr) {
//     if (callback2(item)) {
//       sum2 += item;
//     }
//   }

//   return sum1 + sum2;
// }


// let endSum = sumOfNumbersByCondition(nums, checkOdd, checkEven);

// console.log(endSum);




// function sumOfNumbersByCondition(arr, calback) {

//   let sum = 0;

//   for (const item of arr) {
//     if (calback(item)) {
//       sum += item;
//     }
//   }

//   return sum;
// }







// function sumOfOdd(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (item % 2 == 1) {
//       sum += item;
//     }
//   }
//   return sum;
// }


// function sumOfEven(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (item % 2 == 0) {
//       sum += item;
//     }
//   }
//   return sum;
// }

// function sumOfThanGreaterFive(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (item > 5) {
//       sum += item;
//     }
//   }
//   return sum;
// }


// let nums = [1, 2, 3, 4, 5, 6, 7, 50];


// let result1 = sumOfNumbersByCondition(nums, checkOdd);
// let result2 = sumOfNumbersByCondition(nums, checkEven);
// let result3 = sumOfNumbersByCondition(nums, checkThanFive);

// console.log(result1);
// console.log(result2);
// console.log(result3);




// function test(isTrue > olmaz) {
//   isTrue();
// }


// function isTrue() {

// }





let user1 = {
  name: "Gultac",
  surname: "Seferova",
  age: 18,
  email: "gultac@gmail.com"
}

let user2 = {
  name: "Lale",
  surname: "Quliyeva",
  age: 25,
  email: "lale@gmail.com"
}

let user3 = {
  name: "Novreste",
  surname: "Aslanzade",
  age: 25,
  email: "novreste@gmail.com"
}


let users = [user1, user2, user3]





// function checkAge(obj) {
//   return obj.age > 18;
// }


// function checkName(obj) {
//   return obj.name == "Novreste";
// }


// function checkEmail(obj) {
//   for (let i = 0; i < obj.email.length; i++) {
//     if (obj.email[i] == "t") {
//       return true;
//     }
//   }
//   return false;
// }


// function test(age) {
//   if (age > 18) {
//     return true;
//   }
//   return false;
// }

// console.log(test(13));




// function getDataByFilter(users, calback) {

//   for (const item of users) {
//     if (calback(item)) {
//       console.log(` ${item.name} ${item.surname} ${item.age}`);
//     }
//   }
// }



// getDataByFilter(users, checkEmail);

// getDataByFilter(users, m => m.name == "Novreste");

// getDataByFilter(users, checkAge);

// getDataByFilter(users, checkName);





let result = users.filter(m => m.name == "Novreste");

for (const item of result) {
  console.log(item.name);
}







