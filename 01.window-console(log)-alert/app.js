//Document write ile cikti verme
//
//document.write("Hello World");
// Yuxaridaki kodu yazarken bele bir problemle qarsilasdim ilk once js faylini <head></head> teqinin daxilinde
// yazmisdim ve yuxaridaki Hello World sozu document'de gorsenmedi cunki fayla defer elave edilmisdir ve bu ,
// o demekdir ki, html dom'a yazildiqdan sonra js kodlari oxunur ve buna gore de error yaranir.
// Demeli documentle kod yazdigimiz zaman, js faylini body teqinin daxilinde en sona ela etmeliyik.
//document.write("Leman Gasimova");

/////////////////////////////////////////////////////////////////
// document.write("Salam Dunya <br>");
// document.write("Qasimova Leman <br>");
// document.write(55 + "<br>");
// document.write(true);
// document.write(false);
// document.write(null);
// document.write(5.5);
//yuxaridaki string'in icerisindeki <br> ozunden sonraki ifadeni yeni setrde yazir
//Yuxaridaki izahlar documente yazmaq usuludur ...[finish]...
//
///////////////////////////////////////////////////////////////////
//
//console log metodu:
//console sinfinin log adinda metodu var
// console.log("Hello World");
// console.log("Leman Gasimova");
// console.log(3.4);
// console.log(true);
// console.log({
//   name: "Leman",
//   surname: "Gasimova",
//   age: 20,
//   univercity: "GDU",
//   academy: "Code Academy",
// });
//
// console.clear() / console'de gorsenen yuxaridaki ifadeleri silir
//console.clear();
//
// let a = 5;
// let b = 10;
// console.log(a + b);
// console.log("Iki ededin cemi:", a + b);
// console.log("Iki ededin cemi:" + (a + b));
//
//console.clear();
//
//
//

//Yuxaridaki izahlar console.log() usuludur ...[finish]...
//
///////////////////////////////////////////////////////////////////
//
// Alert popup ile cikti verme islemleri:
//console.log(window);
// javascript'in en boyuk obyekti window obyektidir.
//window obyektinin alert metodu var
//console.log(document.location.host);
//alert("Salamlar");
//
//let a = 10;
//let b = 8;
//alert("iki ededin cemi:" + (a + b));
//
//alert("F5 tusuna basmayiniz lutfen !!")
//
//
//Yuxaridaki izahlar alert usuludur ...[finish]...
//console.log(window);
//console.log(window.location.port);
console.error("Xeta bas verdi");
console.warn("Xeta bas verir")
