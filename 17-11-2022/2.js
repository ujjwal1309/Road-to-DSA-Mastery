let str = "Thor";
let bag = "";
for (let i = 0; i < str.length; i++) {

  str[i] === str[i].toUpperCase()
    ? (bag += str[i].toLowerCase())
    : (bag += str[i]);
}
console.log(bag);
