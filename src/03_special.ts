//strictNullChecks
// let title : string = "intro"
// title = undefined

let tittle: string | undefined = "introduction";
tittle = undefined;

// void: function doesn't return a useful value
 function log(msg:string) : void {
    console.log(msg);
}

// never: function that never returns
function error(message: string): never {
    throw new Error(message);
}

// do not use any, it defeats the purpose of using TypeScript
 
const valueAny: any = JSON.parse('{"x" : 1}');

valueAny.notThere.toFixed(2); // this compiles but can break/explode at runtime

