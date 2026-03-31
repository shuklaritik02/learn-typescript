// array basics

let numbers: number[] = [1, 2, 3,4,5];
numbers.push(6);
// numbers.push("7") // error 

let names: string[] = ["Ritik", "Rahul", "Rohit"];

//mixed array

let mixed: (string | number)[] = [1,"ritik", 2, "hello"];

//array of objects

type User1 = {
    name: string;
}

let userdata: User1[] = [
    {
        name : "ritik",
    }

]

// example real world data

type Product = {
  name: string;
  price: number;
};

let products: Product[] = [
  { name: "Phone", price: 10000 },
  { name: "Laptop", price: 50000 }
];
