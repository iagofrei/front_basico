const a = {
    "name": "Matheus",
};
  
const b = {};

Object.assign(b, a);

console.log("a:", JSON.stringify(a));
console.log("b:", JSON.stringify(b));

console.log(a === b);

a.age = 31;

Object.assign(b, a);

console.log("a:", JSON.stringify(a));
console.log("b:", JSON.stringify(b));

delete b.age;

console.log("a:", JSON.stringify(a));
console.log("b:", JSON.stringify(b));