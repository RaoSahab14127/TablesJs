// ///////////////////////////////////
// alert("Welcome");
// alert("Error! Pleae enter a valid password");
// alert("Welcome to js Land...\nHappy Coding");
// alert("Welcome to js Land...");
// alert("Happy Coding\nPrevent this page from creating additional dialogs.");
// document.write("Yah! I Can wriet Html")
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// var age = 21;
// alert("i am "+age+" years Old")
// var orderC=prompt("What product");
// var Quant=+prompt("How many?");
// alert("Your Order "+orderC+" with Quantity of " +Quant);
var num = +prompt("Which Table You Want")
var lim = +prompt("To which level You Want")
for (var i= 1; i<=lim; i++){
    document.write( num+"X "+i+"="+(num*i));
    document.write("<br/>");

}