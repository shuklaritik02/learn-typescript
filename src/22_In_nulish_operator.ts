type InExample1 = { role: "Admin"; permissions: string[] };
type InExample2 = { role: "User"; expiresAt: Date };

type UserExample = InExample1 | InExample2;

function describeUserExample(u: UserExample) {
  if ("permissions" in u) {
    return `Admin ${u.permissions.join(",")}`;
  }

  return `User ${u.expiresAt.toISOString()}`;
}

console.log(describeUserExample({ role: "Admin", permissions: ["read"] }));


// optional nullish operator

// optional chaining

interface User02 {
  name: string;
  email?: string;
}

const usern: User02 = {
  name: "Ritik",
}

// console.log(usern.email.toUpperCase()); // crashes with error
console.log(usern.email?.toUpperCase()); // undefined


// nullish coalescing operator

const name22: string | null = null;
const displayName = name22 ?? "Guest";
console.log(displayName); // "Guest"


// difference between || and ??

const value = 0;

console.log(value || 100); // 100 ❌
console.log(value ?? 100); // 0 ✅



  
