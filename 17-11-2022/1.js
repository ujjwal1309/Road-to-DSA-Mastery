let str = "Ujjwal";

convert(str);

function convert(str) {
  let bag = "";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (str[i] === lower[j]) {
        bag += upper[j];
      } else if (str[i] === upper[j]) {
        bag += upper[j];
      }
    }
  }

  console.log(bag);
}
