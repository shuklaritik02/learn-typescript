// function greet(name?:string) :string {

//     console.log("hello" + name);
    
    
// }

// greet("ritik"); // hello ritik
// greet();  hello undefined

function Greet(name?: string) {
  if (name) {
    console.log(name.toUpperCase());
  }
}

Greet("ritik"); // RITIK
Greet(); // No output, as name is undefined and the if condition fails


// Optional parameters can also have default values
function greetWithDefault(name: string = "Guest"): string {
    console.log("Hello " + name);
    return "Hello " + name;
}   

greetWithDefault("Ritik"); // Hello Ritik
greetWithDefault(); // Hello Guest