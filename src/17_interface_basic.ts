interface user1 {
    id: string;
    name: string;
    email?: string;
    readonly createdAt: Date
}

const userData: user1 = {
    id: "123",
    name: "ritik",
    createdAt: new Date()
}

// interface with function

interface calculator {
    (a: number, b: number): number;
}

const add: calculator = (a, b) => a + b;
const subtract: calculator = (a, b) => a - b;
const multiply: calculator = (a, b) => a * b;
const divide: calculator = (a, b) => a / b;