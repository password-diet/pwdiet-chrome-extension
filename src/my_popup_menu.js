setInterval(() => {
  console.log("Hi, I am popup")
}, 1000)

let dwGen=require("diceware-password-generator")
let copyDiv=document.getElementById("copyme");
copyDiv.focus();
document.execCommand("SelectAll");
document.execCommand("Copy",!1,null);
console.log(dwGen());
