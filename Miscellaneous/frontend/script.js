arr = [1, 2, 3, 4, 5];

arr.push(6, 7, 9);

arr.sayhello = () => {
  console.log("Hi! I am array");
};

arr2 = [12, 34, 5, 7, 98];

arr2.sayhello = () => {
  console.log("Hi! I am array");
};

console.log("arr prototype: ", arr.__proto__);
console.log("Array prototype: ", Array.prototype);
