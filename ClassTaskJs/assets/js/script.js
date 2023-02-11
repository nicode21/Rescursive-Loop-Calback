"use strict";


// let num = 5;


// console.log(factorial(num));

// function factorial(num) {
//   if (num == 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }





// let stu1 = {
//   name: "Nicat",
//   surname: "Novruzzade",
//   age: 3,
// }

// let stu2 = {
//   name: "Resul",
//   surname: "Hesenov",
//   age: 3,
// }

// let stu3 = {
//   name: "Vuqar",
//   surname: "Rustemov",
//   age: 3,
// }

// let stu4 = {
//   name: "Fatime",
//   surname: "Bayramova",
//   age: 3,
// }

// let stu5 = {
//   name: "Murad",
//   surname: "Ceferov",
//   age: 3,
// }

// let students = [stu1, stu2, stu3, stu4, stu5];


// console.log(ageFilter(students));


// function ageFilter(arr) {

//   let avarage = 0;

//   arr.forEach((element, index) => {

//     avarage += element.age;

//   });



//   return avarage / arr.length;

// }


//***********************************************************************************************************




let user1 = {

  name: "Nicat",
  surname: "Novruzzade",
  age: "21"

}

let user2 = {

  name: "Fatime",
  surname: "Bayramova",
  age: "20"

}

let user3 = {

  name: "Murad",
  surname: "Ceferov",
  age: "19"

}


let students = [user1, user2, user3];



let result = students.filter(m => m.age > 20);

for (const item of result) {
  console.log(`${item.name} ${item.surname} ${new Date().getFullYear() - item.age}`);
}




// function userFilter(age) {

//   return age > 20;

// }











