

let number = prompt("Son kiriting!")

if(number < 0){
  alert("Musbat son kiriting")
}
else if(number % 2 == 0 && number > 0 && number <= 9) {number
  alert("Bir xonali juft son");
}
else if(number % 2 == 0 &&  number> 10 && number <= 99){
  alert("Ikki xonali juft son");
}
else if(number % 2 == 0 && number >= 100 && number <= 999){
  alert("Uch xonali juft son");
}

else if(number % 2 == 0 && number >= 1000 &&number <= 9999){
  alert("Tort xonali juft son");
}
