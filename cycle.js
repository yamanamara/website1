import { plansList } from "./data.js";


const urlParams = new URLSearchParams(window.location.search);

let selectedPlan = parseInt(urlParams.get("plan"));

document.getElementById("planChosen").textContent= "You chose " + plansList[selectedPlan].name;
document.getElementById("monthlyPrice").textContent = "Only " + plansList[selectedPlan].monthlySubPrice + "$ a month!";
document.getElementById("yearlyPrice").textContent = "Only " + plansList[selectedPlan].yearlySubPrice + "$ a month!";





let monthlyClick = document.getElementById("monthlyClick");
monthlyClick.onclick = (target => {
    window.location = "./checkout.html?plan=" + selectedPlan + "&monthly=true";
});





let yearlyClick = document.getElementById("yearlyClick");
yearlyClick.onclick = (target => {
    window.location = "./checkout.html?plan=" + selectedPlan + "&monthly=false";
});

// no need to touch
//ready