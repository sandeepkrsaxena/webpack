import { showMyName } from "./Other.js";
import "../css/style.css";
const buttonId = document.getElementById("demo");
const name = document.getElementById("name");
let valueChnage = false;
buttonId.addEventListener("click", getName);
function getName(){
    showMyName("Sandeep Kumar Sxena");
    valueChnage = !valueChnage;
    if(valueChnage){
        name.innerHTML = "Sandeep Kumar Saxena"
        buttonId.innerHTML = "Hide Name";
    }
    else{
        name.innerHTML = ""
        buttonId.innerHTML = "Show Name";

    }
   
}

