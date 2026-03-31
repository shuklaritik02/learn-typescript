
let names1: ReadonlyArray<string> = ["Ritik", "Rahul", "Rohit"];

// names.push("Rohit") // error
// names[0] = "Rohit" // error

// function that takes readonly array as parameter

function getRoles(): readonly string[] {
  return ["admin", "user"];
}

// getRoles().push("guest") // error

// readonly array with objects

type User2 = {
  name2: string;
  hobbies: readonly string[];
};

const user: User2 = {
  name2: "Ritik",
  hobbies: ["coding", "gaming"]
};

// user.hobbies.push("music"); ❌