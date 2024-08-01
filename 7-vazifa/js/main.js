


  
let speed = prompt("Tezligingizni kiriting:")
let point = 0
if(speed >= 70){
    point = (speed - 70) / 5
    if(point > 12){
        alert("Prava olindi")
    }else{
        alert("pointlar soni: " + point)
    }
}