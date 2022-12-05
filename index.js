const fs = require('fs');


async function fetchWithCoordinates(coordinates) {
    //console.log("trying coordinates: " + coordinates);
    const resp = await fetch('https://www.fortnitechapter4.com/api/codes/'+ coordinates + '/data.json');

    //console.log("response for coordinates [" + coordinates + "] - " + resp.status);
    if(resp.status !== 404){
        console.log("found one!! - [" + coordinates + "]");
        fs.appendFileSync('found.txt', coordinates + "\n");
    } else {
        let formattedDate = new Date().toISOString();
//        console.log(formattedDate + ": - Nope");
        fs.appendFileSync('nope.txt', coordinates + "\n");
    }
//    console.log(resp);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
async function doIt(){
    for (let i = 0; i < 10000; i++) {
        fetchWithCoordinates(getRandomCoordinates());
        await delay(100);
    }
}

function getRandomCoordinates() {
    let possibleValues = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let a = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let b = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let c = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let d = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let e = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let f = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let g = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let h = possibleValues.charAt(getRandomInt(0, possibleValues.length - 1));
    let coordinates = a.toString() + b.toString() + c.toString() + "-" + d.toString() + e.toString() + "-" + f.toString() + g.toString() + h.toString();
    return coordinates;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//main loop
doIt();

