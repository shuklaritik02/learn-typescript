// type vs interface

type user4 ={
    name: string;
     age: number;  // declaration merging is not possible with type alias   
    email?: string;
}

interface user5 {
    name: string;
     // age: number;  // declaration merging is possible with interface 
    email?: string;
}

// declaration merging with interface

interface user5 {
    age: number;
}

// type declaration merging is not possible
// type user4 = {

//     age: number;
// }  


// union or intersection not possible with interface but possible with type alias

// union with type alias
type status2 = "success" | "error" | "pending";     

// extend and combine  interface is possible with interface but not with type alias

interface user6 {
    name: string;
}       

interface userA extends user6 {
    age: number;
}   
