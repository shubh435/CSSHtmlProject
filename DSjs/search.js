const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
console.log("Enter a name to search for: ");
const name = "Cynthia";
const position = names.indexOf(name);
if (position >= 0) {
  console.log("Found " + name + " at position " + position);
} else {
  console.log(name + " not found in array.");
}
