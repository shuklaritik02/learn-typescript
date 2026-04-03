// type aliases 

type user2 = {
    name: string;
    age: number;
    email?: string;
}

const userdata3: user2 = {
    name: "ritik",
    age: 30
}

// union type alias

type status1 = "sucess" | "error" | "pending";

let currentStatus: status1 = "sucess";

// type alias with function
type calculator1 = (a: number, b: number) => number;

const add1: calculator1 = (a, b) => a + b;
const subtract1: calculator1 = (a, b) => a - b;
const multiply1: calculator1 = (a, b) => a * b;
const divide1: calculator1 = (a, b) => a / b;


// combine type (intersection) 

type A = { name: string };
type B = { age: number };

type User3 = A & B;

const user4: User3 = {
    name: "ritik",
    age: 30
};

