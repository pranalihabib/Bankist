///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCopy = dogsJulia.slice();
  juliaCopy.splice(0, 1);
  juliaCopy.splice(-2);

  //   dogsJulia.slice(1, 3);
  const juliaAndKate = juliaCopy.concat(dogsKate);
  //   const juliaAndKate = [...juliaCopy, ...dogsKate];

  juliaAndKate.forEach(function (age, i) {
    age > 3 &&
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    age <= 3 && console.log(`Dog number ${i + 1} is still a puppy`);
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function calcAverageHumanAge(ages) {
  const humanYears = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4,
  );
  console.log(humanYears);

  const humanYearsCorrected = humanYears.filter(dogAge => dogAge >= 18);
  console.log(humanYearsCorrected);

  // const averageDogAge =
  //   humanYearsCorrected.reduce((acc, cur) => acc + cur) /
  //   humanYearsCorrected.length;

  const averageDogAge = humanYearsCorrected.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0,
  );
  console.log(averageDogAge);
}

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAgeCopy = function (ages) {
  const humanYears = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  console.log(humanYears);
};

// calcAverageHumanAgeCopy([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAgeCopy([16, 6, 10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

//1
const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

//2
const dogBothActivities = breeds.find(
  dog => dog.activities.includes('running') && dog.activities.includes('fetch'),
);
// console.log(dogBothActivities);

//3
const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

//4
const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

//5
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(dog => dog.activities.includes('swimming'))
      .flatMap(dog => dog.activities)
      .filter(act => act !== 'swimming'),
  ),
];
// console.log(swimmingAdjacent);

//6
// console.log(breeds.every(dog => dog.averageWeight > 10));

//7
// console.log(breeds.some(dog => dog.activities.length >= 3));

// BONUS
const fetchWeights = breeds
  .filter(dog => dog.activities.includes('fetch'))
  .map(dog => dog.averageWeight);
// console.log(fetchWeights);

const heaviestBreed = Math.max(...fetchWeights);
// console.log(heaviestBreed);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
// console.log(movements);

movements.sort((a, b) => {
  if (a < b) return 1; //b, a
  if (a > b) return -1; //a, b
});
// console.log(movements);

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1. total money deposited into accounts (sum of only +ve values in each account)/ (sum of all account balances)
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// 2. how many deposits have there been with at least 1000 dollars or more
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000)
//   .reduce(count => count + 1, 0);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0); // count+1
// console.log(numDeposits1000);

// 3. create a new obj
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, curr) => {
//       curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 },
//   );

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );
// console.log(deposits, withdrawals);

// 4. convert to title case
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1),
    );
  // console.log(titleCase);
};
convertTitleCase('this is a nice title');
convertTitleCase('this is a LONG title but not too long');
convertTitleCase('and here is another title with an EXAMPLE');

// 1. to mutate original array(avoided)
// push(end), unshift(start) - add to original array
// pop(end), shift(start), splice(any) - remove from original
// reverse, sort, fill

// 2. a new array same length as original
// map(loop) - same length as original
// filter() - filtered using condition
// slice() - take portion of original
// with() - with one item replaced
// flat(), flatMap() - flattening the array and returning as new
// toReversed() - reverse
// toSorted() - sort and return new array
// toSplice() - with deleted items
// a1.concat(a2) - join two arrays

// 3. an array index
// indexOf() - based on value
// findIndex() - based on test condition
// findLastIndex() - based on test condition(searches for it from the last)

// 4. an array element
// find() - based on test condition
// findLast() - based on test condition
// at() - based on position

// 5. know if array includes
// includes() - based on value
// .some() - based on test condition
// .every() - based on test condition

// 6. a new string
// .join()

// 7. to transform to value
// reduce() - boiled down to one single value, based on accumulator

// 8. to just loop array
// forEach - based on callback. Does not create a new array, just loops over it.

// 9. more such tools and techniques
// Object.groupBy - grouping an array by categories
// Array.from - creating a new array from scratch
// new Array(n) - creating a new array from scratch with n empty positions(use together with .fill method)
// [...arr1, ...arr2] - joining 2 more arrays
// [...new Set(arr)] - creating a new array containing unique values from arr
// [...new Set(arr1).intersection(new Set(arr2))] - creating a new array containing unique values from both arr1 and arr2

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(function (dog) {
  dog.recommendFood = Math.floor(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2
const result = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  result.curFood < result.recommendFood * 0.9
    ? "Sarah's dog is eating too little"
    : result.curFood > result.recommendFood * 1.1
      ? "Sarah's dog is eating too much"
      : "Sarah's dog is eating an okay amount",
);

// 3
const { ownersTooLittle, ownersTooMuch } = dogs.reduce(
  (acc, dog) => {
    if (dog.curFood < dog.recommendFood * 0.9) {
      acc.ownersTooLittle.push(...dog.owners);
    } else if (dog.curFood > dog.recommendFood * 1.1) {
      acc.ownersTooMuch.push(...dog.owners);
    }

    return acc;
  },
  {
    ownersTooLittle: [],
    ownersTooMuch: [],
  },
);

const ownersTooLittle1 = dogs
  .filter(dog => dog.curFood < dog.recommendFood * 0.9)
  .flatMap(dog => dog.owners);

const ownersTooMuch1 = dogs
  .filter(dog => dog.curFood > dog.recommendFood * 1.1)
  .flatMap(dog => dog.owners);
console.log(ownersTooMuch1);

// 4
console.log(`${ownersTooLittle.join(' and ')} eat too little`);
console.log(`${ownersTooMuch.join(' and ')} eat too much`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recommendFood));

//6
console.log(
  dogs.every(
    dog =>
      dog.curFood >= dog.recommendFood * 0.9 &&
      dog.curFood <= dog.recommendFood * 1.1,
  ),
);

// 7
const dogsOkay = dogs.filter(
  dog =>
    dog.curFood >= dog.recommendFood * 0.9 &&
    dog.curFood <= dog.recommendFood * 1.1,
);
console.log(dogsOkay);

// 8
const groupByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood < dog.recommendFood * 0.9) return 'too little';
  else if (dog.curFood > dog.recommendFood * 1.1) return 'too much';
  else return 'exact';
});
console.log(groupByPortion);

// 9
const groupByOwners = Object.groupBy(dogs, dog => {
  if (dog.owners.length === 1) return 'one';
  else if (dog.owners.length === 2) return 'two';
  else if (dog.owners.length === 3) return 'three';
  else return 'moreThanThree';
});
console.log(groupByOwners);

const groupByNumOwners = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`,
);
console.log(groupByNumOwners);

// 10
const sortDogs = dogs.toSorted((a, b) => a.recommendFood - b.recommendFood);
console.log(sortDogs);
