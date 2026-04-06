// shallow copy of an object

const user25 = {
    name: "John",
    age: 30,
    address: {  
        city: "delhi",
        country: "india"
    }
}

const copy = {...user25} // shallow copy

copy.address.city = "mumbai"

console.log(user25.address.city) // mumbai


// deep copy of an object

const userN25 = {
  name: "sidharth",
  address: {
    city: "noida"
  }
};

const deepCopy = JSON.parse(JSON.stringify(userN25));

deepCopy.address.city = "Mumbai";

console.log(userN25.address.city); // Noida ✔️


// important utils types

// partial - makes all properties optional

interface userN1  {

    id: string
    name: string
    age: number

}

type partialuserN1 = Partial<userN1>

const u:partialuserN1 = {
    name: "ritik"
}

// required - makes all properties required

type UserN1 = {
  name?: string;
  age?: number;
};

type RequiredUser = Required<UserN1>;  

// RequiredUser is equivalent to:
// type RequiredUser = {
//   name: string;
//   age: number;
// };
const userN2: RequiredUser = {
    name: "sidharth",
    age: 30 
}

// readonly - makes all properties readonly

type UserN2 = {
  name: string;
};

const userA1: Readonly<UserN2> = {
  name: "Ritik"
};

// userA1.name = "New"; // ❌ Error


// pick - picks specified properties from a type

type UserN3 = {
  name: string;
  age: number;
  email: string;
};

type UserPreview = Pick<UserN3, "name" | "email">;
const userN3: UserPreview = {
    name: "sidharth",
    email: "sid@123.com"
}

// omit - rwemoves specified properties from a type

type UserN4 = {
  name: string;
  age: number;
  password: string;
};

type SafeUser = Omit<UserN4, "password">;

const userN4: SafeUser = {
    name: "sidharth",
    age: 30
}

// record - creates a type with specified keys and value types

type RoleN1 = "admin" | "user";

const usersN6: Record<RoleN1, string> = {
  admin: "Ritik",
  user: "Aman"
};

// examle real world example

type UserN5 = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// API response
type PublicUser = Omit<UserN5, "password">;

// Update API
type UpdateUser = Partial<UserN5>;

// Only required login
type LoginUser = Pick<UserN5, "email" | "password">;

