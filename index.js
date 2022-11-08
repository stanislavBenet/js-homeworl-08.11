/*
Срок сдачи: Завтра
1) Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative"

2) Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання, інакше - вивести результат множення

3) Якщо значення змінної кратно(тобто ділеться без остачі) на 7 і одночасно кратна 3 - виводимо "you win!", інакше - "you loose"

 */

//1
const number = 3;
if (number >= 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//2
const num1 = 5;
const num2 = 3;
if (num1 > num2) {
  console.log(num1 - num2);
} else {
  console.log(num1 * num2);
}

//3
const number1 = 63;
if (number1%7===0 && number1%3===0) {
  console.log("you win");
} else {
  console.log("you lose");
}
