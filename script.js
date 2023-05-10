document.getElementById("changeColor").addEventListener('click', changeColor);
function changeColor() {
  let result = "";
  const characters ='abcdefABCDEF0123456789';
  for(var i=0; i<=5; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }  
 let hexCode = "#" + result;  
 document.getElementById("colorHexCode").innerText = hexCode; 
 document.getElementById("firstDiv").style = "background-color:" + hexCode;
}