const today = new Date();

console.log('Mon Sep 23 2024 22:46:18 GMT+0900 (日本標準時)');

const date = new Date();

const [month, day, year] = [
 	date.getMonth(),
  	date.getDay(),
  	date.getFullYear(),
];

console.log(year + '年', month + 1 + '月', day + 22 + '日');
