// objects in TypeScript

type user = {
    id : string, // id is required
    name : string, 
    email? : string, // email is optional
    age? : number // age is optional
     readonly createdAt: Date; //can not be reassigned
}

const user1:user = {
    id : "123",
    name : "ritik shukla",
    createdAt: new Date()
}

type Count = { [k: string]: number };
type Count1 = Record<"likes" | "views" | "shares" | "random", number>;

const c1: Count = { whatever: 1 };
const c2: Count1 = { likes: 1, views: 2, shares: 3, random: 5 };