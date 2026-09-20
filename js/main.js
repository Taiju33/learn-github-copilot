const arr = [1, 2, 3, 4, 5];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);

// 1から6のサイコロを1回振って結果を返す関数
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(`Dice roll: ${rollDice()}`);

// 1~100の数値をループさせて、3の倍数のときは「Fizz」、
// 5の倍数のときは「Buzz」、3と5の両方の倍数のときは「FizzBuzz」と表示する
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}


const score = 85;

if (score >= 95) {
  console.log("成績：S");
} else if (score >= 90) {
  console.log("成績：A");
} else if (score >= 80) {
  console.log("成績：B");
} else if (score >= 70) {
  console.log("成績：C");
} else if (score >= 60) {
  console.log("成績：D");
} else {
  console.log("成績：F");
}