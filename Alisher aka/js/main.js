let money = +prompt ("hisobingizdagi summani kiriting")
let bilet = 500*11000.34;
let hotel = 250*11000.34;
let expenses = 120*12354.03;
console.log( "biletNarxi=" +   bilet +"sum " + " mehmonxonaNarxi=" + hotel +"sum " + " qo`shimcha harajatlar =" + expenses)
let result =(bilet + hotel + expenses)
console.log ("jami harajatlar "  +result)
console.log ("sizning hisobingizdagi mablag`="+money)

if(result <= money){
   console.log("oq yo`l  Alisher aka")
   document.write("oq yo`l Alisher aka")
}
else{
   console.log("Alisher aka ozgina sabr qilishiz kerak ekan.")
   document.write("Alisher aka ozgina sabr qilishiz kerak ekan.")
}