var x = 3;
var y = 1.1;
const print = (...ars) => {
    console.log(...ars);
  };
print(x + y);
print(x * y);
print((x + y) * (x - y));
var z = 9;
print(Math.sqrt(z));
print(Math.abs(y / x));
z = y/x
print(z.toFixed(2));

