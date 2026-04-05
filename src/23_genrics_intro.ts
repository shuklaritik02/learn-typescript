// genrics intro

function identify<T>(arg:T): T {
    return arg;
}

identify<string>("Hello");
identify<number>(123);  


// genrics using infrance

function student<T>(s: T): T {
    return s;
}

student("Ritik"); // TypeScript infers T as string
student(123); // TypeScript infers T as number


// genrics with arrays

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const numbers23 = [1, 2, 3];
const firstNumber = getFirstElement(numbers23);  


// multiple genrics

function merge<T, U>(n:T, a:U){
    return [n, a]
}

merge("Ritik", 123); // T is string, U is number
merge(123, "Ritik"); // T is number, U is string

// genrics with interfaces

interface Box<T> {
  value: T;
}

const box1: Box<string> = { value: "Hello" };
const box2: Box<number> = { value: 100 };