const age = 25;

// let i = 0;

// while (i < 1000) {
//   if (i % age === 0) {
//     console.log(i);
//   }
//   i++;
// }

// do {
//   if (i % age === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 1000);


// for (let i = 0; i < 1000; i +=2) {
//   if (i % age === 0) {
//     console.log(i);
//   }
// }





// const sideA = 5;
// const h = 4;

// const otherSideA = 50;
// const otherH = 44;

// console.log(square(sideA, h));
// console.log(square(otherSideA, otherH));
// console.log(square(sfdfs, 5));

// function square (a, h) {
//   return (a * h) / 2;
// }


// function sumPeriod(from, to) {
//   let sum = 0;
//   for (let i = from; i < to; i++) {
//     sum += i;
//   }

//   console.log(sum);
// }

// sumPeriod(2, 5);
// sumPeriod(0, 5);
// sumPeriod(20, 5);
// sumPeriod('gfgf', 5);


const list = ['Хліб', 'Сир', 'Молоко', 'Яйця', 'Апельсини'];
const list2 = ['xліб', 'Сир', 'апельсини'];

function createList (array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`${i}. ${array[i].toUpperCase()}`);
  }
}
createList(list);
createList(list2);





