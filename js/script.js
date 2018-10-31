let eventType = prompt("What are you doing tonight?");
let tempFahr = prompt("What's the Temperature");


if(eventType==="formal") {
    console.log("You should wear a suit")
}

else if(eventType==="semiformal") {
    console.log("You should wear a Polo")
}

else if(eventType==="casual") {
    console.log("you should wear something comfy")
}

if(tempFahr > 70) {
    console.log("you don't need a jacket")
}

else if (tempFahr <= 70 && tempFahr >= 54) {
    console.log("you should wear a jacket")
}

else if(tempFahr < 54) {
    console.log("you should wear a coat");
}