let eventType = prompt("What are you doing tonight?");
let tempFahr = prompt("What's the Temperature");
let resultEvent =""
let resultTemperature=""

if(eventType==="formal") {
    resultEvent=("since it is ") + tempFahr + " degrees, you should wear a suit "
}

else if(eventType==="semiformal") {
    resultEvent=("since it is ") + tempFahr + " degrees, you should wear a polo "
}

else if(eventType==="casual") {
    resultEvent=("since it is ") + tempFahr + " degrees, you should wear something comfy "
}

if(tempFahr > 70) {
    tempFahr=("and no jacket")
}

else if (tempFahr <= 70 && tempFahr >= 54) {
    tempFahr=("and wear a jacket")
}

else if(tempFahr < 54) {
    tempFahr=("and wear a coat");
}


let result = resultEvent += tempFahr; 
    console.log(result)
