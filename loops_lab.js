/*
1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
*/

let num = 15; // for #1 & #2, I wanted to combine both while and for loops, and not do them seperate. was not sure which way you wanted, but I did it.
while ( num >= 1){
  //for ( num == 15; num > 1; num--){
  //console.log(num)

console.log(num);
  num--;

 }

/*
2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
*/
console.log("----------------");
let num2 = 0;
while (num2 <= 10){
 
  if(num2 % 2 === 0){
    console.log(num2 +" is even");
    
  }
  else{
    console.log(num2 +" is odd");
    }
    num2++;
}

for(let i = 0; i <= 15; i++){
  if(i % 2 === 0){
    console.log(i + " is even");
    }
    else {
      console.log(i + " is odd");
      
    }
  
}


console.log("-------------");

/*
3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18")
*/

//while loop

let x = 0;
while (x <= 5){
  console.log(x * 9);
  x++
}
console.log("__________");
// for loop;

for ( let y = 3; y <= 9; y++){
  console.log(y*9);
}

console.log("-------------");

/*
4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
*/

let number = 1;
while (number <= 90){
if ( number == 1 ){
  console.log(number + 4);
  number+=4;
}
else {
  console.log(number + 10);
  number+=10;
}
//number++;
}

/*
5. Without running/executing your code, how many times will the loop below run? Explain why.

```js
let i = 5;

while (i > 3) {
    i += 1
}
*/

// the loop will not run becasue, the statement is fasle. 5 is not greater than 3( 5 > 3)

console.log("__________");

/*
6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
*/


let n = 1;
while ( n <= 100){
  if (n % 3  == 0){
    console.log("Fizz")
  }
  else if (n % 5  == 0){
    console.log("Buzz")
  }
  else {
    console.log(n);
  }
  n++;
}

/*
7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

console.log("______________");



let z = 1;
while ( z <= 100){
   if ( z % 3 ==0 && z % 5 == 0 ){
    console.log("FizzBuzz");
  }
  else if (z % 3  == 0){
    console.log("Fizz")
  }
  else if (z % 5  == 0){
    console.log("Buzz")
  }
  else {
    console.log(z);
  }
  z++;

}
// question 8

let bottle = 99;
while (bottle >= 1){
  console.log(bottle + " bottles of beer on the wall, "+ bottle  + " bottles of beer.");
  bottle--; 
  console.log("Take one down and pass it around, " + bottle+  " bottles of beer on the wall.")
if ( bottle === 1 ){
  console.log(bottle + " bottles of beer on the wall, "+ bottle + " bottles of beer ");
  console.log("take one down, no more bottles of beer on the wall.");
  bottle --;
  }
  if(bottle === 0){
    console.log("No more bottles of beer on the wall, no more bottles of beer")
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    
    
  } 
  
 
}
//question 9
function assignGrade(score) {
  if (score > 90) {
      return 'A';
  } else if (score > 80) {
      return 'B';
  } else if (score > 70) {
      return 'C';
  } else if (score > 65) {
      return 'D';
  } else {
      return 'F';
  };
};
console.log(assignGrade(91))

//question 10
let str = "*";

for(let i = str; i <= ""; i++){
  str+=i;
  console.log(str);
  
}

