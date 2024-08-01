

let age = prompt("Yosh kiriting")

if(age < 0){
    alert("Musbat son kiriting!")
}
else if(age > 0 && age <= 10){
    alert("Yosh bola");
}
else if(age >= 11 && age <= 15){
    alert("O'smir");
}
else if(age >= 16 && age <= 25){
    alert("Boydoq");
}
else if(age >= 26 && age <= 40){
    alert("Kata yoshli odam ");
}
else if(age >= 41 && age <= 70){
    alert("Doda , (Otaxon)");
}
else if(age > 70){
    alert("Umringgiz uzoq bolsin");
}
else{
    alert("Son kiriting !");
}