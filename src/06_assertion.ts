const raw = '{ "name": "Alice", "age": 30 }';

const riskyuser = JSON.parse(raw) as { name: string; age: number };

console.log(riskyuser.name);   

type User22 = { id: number; name: string };

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
  console.log(maybe.name); //safe
}
