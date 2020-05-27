// var firstName = 'Dimi';
// var lastName = 'wuyts';
// var age = 29
// var fullAge = true;
// var job;
// console.log(fullAge)
// job = 'teacher';
// console.log(job)

/* ------------------------------------Variable mutation and Type coercion------------------------------------ */

// var firstName = 'jhon';
// var age =  29

/* ------------------------------------Type coercion------------------------------------ */

// console.log (firstName + ' ' + age)
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;

/* ------------------------------------Variable mutation------------------------------------ */

// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' ' + age + ' year old ' + job + '. is he married ? ' + isMarried);
//
// var lastName = prompt('what is his last name?');
//
// console.log(firstName + ' ' + lastName)

/* ------------------------------------Basic operators------------------------------------ */
// var year, yearJhon, yearMark;
// now = 2020;
// ageJhon = 28;
// ageMark = 33;
// Mark = 'im a mark';
//
// yearJhon = now - ageJhon;
// yearMark = now - ageMark;
//
// var jhonOlder = ageJhon > ageMark;
// console.log(typeof jhonOlder, typeof ageMark, typeof Mark)

/* ------------------------------------Operator precedence------------------------------------ */
// var now = 2020;
// var yearJhon = 1989;
// var fullAge = 18;
//
// var isFullAge = now - yearJhon >= fullAge; //True
// console.log(isFullAge);
//
// var ageJhon = now - yearJhon;
// var ageMark = 35;
// var ageAvarage = (ageJhon + ageMark) / 2;
// console.log(ageAvarage);
//
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 = 26;
// console.log(x, y);
//
// x *= 2;
// x += 10;
// x += 10;
// x++;
// console.log(x);

/* ------------------------------------Coding Challenge 1------------------------------------ */
// var marksWeight = 82
// var marksHeight = 1.65
// var jhonsWeight = 96
// var jhonsHeight = 1.34
//
// var bmiCalcMark = marksWeight / (marksHeight *= 2)
// var bmiCalcJhon = jhonsWeight / (jhonsHeight *= 2)
//
// console.log(bmiCalcJhon, bmiCalcMark)
// var bmiCompare = bmiCalcMark >= bmiCalcJhon;
//
// if(bmiCalcMark >= bmiCalcJhon){
//     console.log('mark\'s bmi is higher then jhon\'s')
// }else {
//     console.log('mark\'s bmi is lower then jhon\'s')
// }

// var bmiTotal = ('Is mark\'s bmi higher then jhon\'s ? '+ bmiCompare)
// console.log(bmiTotal)

/* ------------------------------------If, Else statements------------------------------------ */
// var firstName = 'jhon';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// }else {
//     alert( 'single');
// }
//
// var isMarried = true;
// if(isMarried) {
//     console.log('this dude is married')
// }else {
//     console.log('this dude is not married')
// }

/* ------------------------------------Boolean logic------------------------------------ */ // ( &&, ||, ! )
// var firstName = 'jhon'
// var age = 21
//  if(age < 13) {
//      console.log(firstName + ' is a boy');
//  }else if(age >= 13 && age < 20){
//      console.log(firstName + ' is a teenager')
//  }else if (age >= 20 && age < 30){
//      console.log(firstName + ' is a young man')
//  }
//  else {
//      console.log(firstName + ' is a man');
//  }

/* ------------------------------------Ternary operator and Switch statements------------------------------------ */
// var firstName = 'jhon'
// var age = 16
// //Ternary
// age >= 18 ? console.log(firstName + ' drinks beer')
//     : console.log(firstName + ' drinks juice');
//
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
//
// //Switch
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' is a teacher');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives people');
//         break;
//     case 'designer':
//         console.log(firstName + ' is a designer');
//         break;
//     default:
//         console.log(firstName + ' is out of work (and homeless)');
// }
//
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

/* ------------------------------------Truthy and Falsy values and equality operators------------------------------------ */
// var height;
// height = 23;
//
// if (height || height === 0) {
//     console.log('variable is defined');
// }else {
//     console.log('variable has not been defined');
// }
// // Equality operator
// if (height == '23') {
//     console.log('type coercion ');
// }
//

/* ------------------------------------Coding challenge 2------------------------------------ */
// var jhonsTeamAv = (89 + 120 + 103) / 3;
// var mikesTeamAv = (116 + 94 + 123) / 3;
// var marysTeamAv = (97 + 134 + 105) / 3;
//
// console.log('jhons team points : ' + jhonsTeamAv, 'mikes team points : ' + mikesTeamAv, 'marys team points : ' + marysTeamAv)
//
// switch(true) {
//     case jhonsTeamAv > mikesTeamAv && jhonsTeamAv > marysTeamAv:
//         console.log('jhonsteam is the winner');
//         break;
//     case mikesTeamAv > jhonsTeamAv && mikesTeamAv > marysTeamAv:
//         console.log('mikesteam is the winner');
//         break;
//     case marysTeamAv > jhonsTeamAv && marysTeamAv > mikesTeamAv:
//         console.log('marys team is the winner');
//         break;
//     case jhonsTeamAv = mikesTeamAv && marysTeamAv:
//         console.log('mike and jhon are equal to eachother');
//         break;
//     default:
//         console.log(' the game did not play out because of covid 19')
//
// }

/* ------------------------------------Functions------------------------------------ */
// function calculateAge(Year) {
//     return 2018 - Year;
//
// }
// var ageJhon = calculateAge(1990);
// var ageMike = calculateAge(1942);
// var ageJane= calculateAge(1972);
// console.log(ageJhon, ageMike, ageJane);
//
// function calculateYears(Year, firstName) {
//     var age = calculateAge(Year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + " retires in " + retirement + ' years');
//     }else {
//         console.log(firstName +  ' already retired')
//     }
// }
// calculateYears(1942, 'jhon');

/* ------------------------------------Function statements and expressions------------------------------------ */
// var whatDoYouDo =
// function (job, firstName) {
//
// }

// function whatDoYouDo(job, firstName) {
// switch (job) {
//     case 'teacher':
//         return firstName + ' teaches kids how to code'
//     case 'designer':
//         return firstName + ' is a designer'
//
//     case 'whatever':
//         return firstName + ' does whatever'
//
//     default:
//         return firstName + ' does jack shit'
//
// }
// }
// console.log(whatDoYouDo('retired', 'dimi'));

/* ------------------------------------Arrays------------------------------------ */
// var names = ['jhon', 'mark', 'jane'];
// var years = [1990, 1969, 1948];
// console.log(names.length)
//
// names[1] = 'ben';
// names[names.length] = 'mary';
// console.log(names)
//
// var jhon = ['jhon', 'smith', 1990, 'teacher', false];
//


// function tipCalculate(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     }else if ( bill >= 50 && bill <= 200) {
//         percentage = .15;
//     }else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
// var bills = [124, 48, 268];
// var tips = [tipCalculate (bills[0]), tipCalculate(bills[1]), tipCalculate(bills[2]) ];
// var billsTotal = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(tips, billsTotal)
//
//































