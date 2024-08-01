


let FizzBuzz = prompt("Raqam kiriting")

if( FizzBuzz % 3 == 0){
  alert("Fizz");
}
else if( FizzBuzz % 5 == 0){
  alert("Buzz");
}
else if( FizzBuzz % 3 == 0 && FizzBuzz % 5 == 0){
  alert("FizzBuzz");
}
else if( FizzBuzz % 3 != 0 && FizzBuzz % 5 != 0){
  alert("Boshqa son kiriting");
}
