// typeof

typeof "hello"   // "string"
typeof 123       // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof {}        // "object"
typeof []        // "object"
typeof null      // "object"

function print(value: number | string) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else {
        console.log(value.toUpperCase());
    }
}

// date 

const date = new Date();

let today: Date = new Date();

const now = new Date();

now.getFullYear();
now.toISOString();
now.getTime();

// instanceof 

class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// typeof as type 

const user7 = {
  name: "Ritik",
  age: 20
};

type UserType = typeof user7;

// combining typeof date type and instanceof

function process(value: string | number | Date) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } 
  else if (typeof value === "number") {
    console.log("Number:", value.toFixed(2));
  } 
  else if (value instanceof Date) {
    console.log("Date:", value.toISOString());
  }
}