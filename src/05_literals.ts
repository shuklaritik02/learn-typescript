// literals 

// example of string literal

let role: "admin" | "user" | "guest";
role = "admin"; // valid
role = "user"; // valid
//  role = "superadmin"; // error: Type '"superadmin"' is not assignable to type '"admin" | "user" | "guest"'.

type status = "sucess" | "error" | "pending";

let apiStatus: status = "sucess"; // valid
apiStatus = "error"; // valid
// apiStatus = "failed"; // error: Type '"failed"' is not assignable to type 'status'.


// example of numeric literal

let dice: 1 | 2 | 3 | 4 | 5 | 6;
dice = 3; // valid
// dice = 7; // error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.

type HTTPStatus = 200 | 400 | 404 | 500;

let responseStatus: HTTPStatus = 200; // valid
responseStatus = 404; // valid
// responseStatus = 201; // error: Type '201' is not assignable to type 'HTTPStatus'.