function printArmstrong(number)
{
for (let i = 1; i <= number; i++) {

  let sum = 0;
  let temp = i;

  while (temp > 0) {

      let remainder = temp % 10;
      sum += remainder**3;
      temp = parseInt(temp / 10);
  }

  if (sum == i) {
      console.log(i);
  }
}
}

printArmstrong(500);




