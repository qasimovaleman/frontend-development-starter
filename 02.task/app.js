// PART 1
// firstName ve lastName dəyişənləri yaradın sonra fullName adında dəyişən yaradıb
// firstName və lastName-ə bərabər edib fullName-i console-da yazın.
//Output:
//Jon Doe.
let firstName = "Laman";
let lastName = "Gasimova";
//
let fullName = firstName + " " + " " + lastName;
//console.log(fullName);
let country = "Ganja";
let age = 20;
let job = "Developer";
let myInfo =
  firstName +
  " " +
  " " +
  lastName +
  "." +
  "I am a" +
  " " +
  job +
  "." +
  " " +
  " I live in" +
  " " +
  country +
  "." +
  " " +
  "I am " +
  " " +
  age +
  " " +
  "years old.";
console.log(myInfo);
//
//
// Aşağıdakı dəyişənlərin hansı data type-da olduğunu qarşısından yazın:
let length = 6;
console.log(typeof length); //number
//
let color = "Brown";
console.log(typeof color); //string
//
let float = "12.5";
console.log(typeof float); //string
//
let like = true;
console.log(typeof true); //boolean
//
let x = {
  firstName: "Leman",
  color: "red",
};
console.log(typeof x); //object
// Uzaqlığı 8600km olan bir ölkəyə, saatda 120km sürətlə gediriksə maşın neçə dəqiqəyə çatar?

//
let s = 8600;
let v = 120;
let t = s / v;
console.log(t);
console.log("The car vill arrive in China in" + " " + t * 60 + " " + "minutes");
///
// ---------    // TASK 4 --------------- //
// Doğum ilinizi və cari ili bir dəyişənə bərabər edib, hazırki yaş aralığınızı console-da yazdırın.
let dogumIli = 2004;
let cariIli = 2024;
let yas = cariIli - dogumIli;
console.log(yas);
console.log("Indiki yasim" + " " + yas + " " + "yaxud" + " " + (yas - 1));
