



//  N1 // function name(str, value) {
//     const index = str.indexOf(value);
//     if (index !== -1) {
//         return str.slice(0, index) + str.slice(index + value.length);
//     }
//     return str;
// }

// console.log(name('To be or not to be', 'not')); 
// console.log(name('I like legends', 'end')); 
// console.log(name('ABABAB', 'BA')); 


//n2
// function satr(str) {
//     const Bracket = str.indexOf('<');
//     const songi = str.lastIndexOf('>');
//     if (Bracket !== -1 && songi !== -1) {
//         return str.slice(Bracket + 1, songi);
//     }
//     return str;
// }

// console.log(satr('<div>')); 
// console.log(satr('<span>')); 
// console.log(satr('<a>')); 

//n3

// function son(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(son(4)); 
// console.log(son(5)); 
// console.log(son(6)); 
// console.log(son(7)); 
// console.log(son(11)); 
// console.log(son(12)); 
// console.log(son(16)); 
// console.log(son(17)); 

//N4

// function raqamsum(n1, n2) {
//     let sum = 0;
//     for (let i = n1; i <= n2; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(raqamsum(5, 10)); 
// console.log(raqamsum(-1, 1)); 
// console.log(raqamsum(1, 2)); 

//N5

// function BrekNumber(arr, k, m) {
//     if (k < 0 || m >= arr.length || k >= m) {
//         console.log("yaroqsiz.");
//         return;
//     }

//     const result = arr.slice(0, k).concat(arr.slice(m + 1));
//     console.log("ozgargan massiv:", result);
//     console.log("raqam soni:", result.length);
// }

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const k = 2;
// const m = 5; 

// BrekNumber(numArray, k, m);

//N06/////

// const kitobs = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < kitobs.length; i++) {
//     const kitob = kitobs[i];
//     const readStatus = kitob.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${i + 1}. ${kitob.author}ning "${kitob.title}" kitobi ${readStatus};`);
//   }
  
//n07
// const mahsulots = [
//     { name: "mahsulot 1", narx: 20000, discount: 10, miqdor: 5 },
//     { name: "mahsulot 2", narx: 10000, discount: 20, miqdor: 4 },
//     { name: "mahsulot 3", narx: 15000, discount: 8, miqdor: 10 },
//     { name: "mahsulot 4", narx: 18000, discount: 5, miqdor: 6 },
//     { name: "mahsulot 5", narx: 5000, discount: 10, miqdor: 16 },
//   ];
  
//   let totalSum = 0;
  
//   for (const mahsulot of mahsulots) {
//     const discountednarx = mahsulot.narx * (1 - mahsulot.discount / 100);
//     const mahsulotSum = discountednarx * mahsulot.miqdor;
//     totalSum += mahsulotSum;
//   }
  
//   console.log("Umumiy summa:", totalSum);
  

