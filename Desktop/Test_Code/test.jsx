let n = 4;
let size = 2 * n - 1;

for (let i = 0; i < size; i++) {
  let row = "";

  for (let j = 0; j < size; j++) {
    let x = Math.abs(n - 1 - i);
    let y = Math.abs(n - 1 - j);
    row += Math.max(x, y) + 1 + " ";
  }

  console.log(row);
}