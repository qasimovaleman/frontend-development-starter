/*

var , let , const

----------------SCOPE---------------
     -> Global Scope : heryerden catmaq olur
     -> Function Scope : ancaq funksiyanin daxilinden ulawmaq olur, yeni her hansisa funksiya daxilinde deyiwen
     yaratmiwiqsa , o deyiseni funksiyadan kenar hec yerde iwletmek olmaz, eger funksiyadan kenarda istifade etsek,
     error verecek 
     -> Block Scope : funksiyanin daxilindeki , if , while , for dovlerinin icerisinde yaradilan deyisenler
     block scope adlanir  yeni ancaq oldugu block'un daxilinde islenir mes: if block'u
*/
//
//

/*var variablesName = 10;
console.log(variablesName);
*/

//
/*
var global scopedir , yeni bu deyiwene her yerden catmaq olar
*/

/*var a = 5;
if (true) {
  console.log(a);
}
*/
// function method1() {
//   var number = 10;
//   console.log(number);
// }
// console.log(number);
// method1();
///////////
//
//
//
function method1(){
    var a =5 //function scope
    if (true) {
        var b = 9 // block scope
    }
}
method1()

// Video 9'u IZLE !