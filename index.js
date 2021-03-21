// Write your code here!

let mains = document.querySelector('main');
mains.remove();

let newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.innerHTML="Waluka is the champion";

document.getElementsByTagName("body")[0].appendChild(newHeader);