let dwGen=require("diceware-password-generator")
let copyDiv=document.getElementById("copyme");
copyDiv.innerHTML = dwGen();
copyDiv.focus();
document.execCommand("SelectAll");
document.execCommand("Copy",!1,null);
