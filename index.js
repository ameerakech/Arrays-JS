//Finding the last element of the array
let arr1 = [3,7,34,9,12];
let arr2 = [true, "green", "where",12,56];
let lastElementArr1 = arr1[arr1.length-1];
let lastElementArr2 = arr2[arr2.length-1];
console.log("Last element of array1:",lastElementArr1);
console.log("Last element of array2:",lastElementArr2)

//2. 
const myPets = ["cow","Bird","Snake","Dog"];
const String = myPets.join(" ");
console.log({String});

//3.Sorting array items
const arr3 =[-5,9,5,3,2,-3,6,8,4,1];
const sortArr3 = arr3.sort((m,n) => m - n);
console.log({sortArr3})

//4 Rmoving duplicates
let arr = ["boy", "man","girl", "school", "girl","woman"];
let withoutDuplicates =  arr.filter((item, index) => arr.indexOf(item)===index);
let withDuplicate = arr.filter((item, index) => arr.indexOf(item)===index);
console.log({withoutDuplicates});
console.log({withDuplicate});

//
let arr5 = ["the", "way", "x", 4];
let word ="food"
let searchResult = arr5.includes(word) ? word : "the search word not found";
console.log({searchResult});

//To sort words n an array
let wordarray = "renniw"
 let wordArr =word.split("").sort("").join("");
 console.log(wordArr);
//6
let fruits = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Grapes", "Watermelone", "Pear", "Cherry", "Plum"];
fruits.splice(5, 0, "Tomato");
console.log("New fruits array:", fruits);