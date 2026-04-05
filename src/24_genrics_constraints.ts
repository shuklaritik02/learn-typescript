// problem without generic constraints

function printLength<T>(value: T) {
//   console.log(value.length); // ❌ error
}

// generic constraints

function printLength1<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength1("Hello"); // works, string has length
printLength1([1, 2, 3]); // works, array has length
// printLength1(123); // error, number does not have length 


// generic constraints with interfaces

interface HasLength {
  length: number;
}

function printLength2<T extends HasLength>(value: T) {
  console.log(value.length);
}

// keyof constraints

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user24 = { name: "Ritik", age: 20 };

getProperty(user24, "name"); // ok
console.log(getProperty(user24, "name")); // Ritik
// getProperty(user24, "email"); ❌ error




