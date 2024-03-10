let mid = 25;
const high = 50;
const low = 1;
let current = 13;
let found = -1;
if (current < mid) {
 mid = (current-low) / 2;
}
else if (current > mid) {
 mid = (current+high) / 2;
}
else {
 found = current;
}
console.log("----fdsf",current,mid,found);