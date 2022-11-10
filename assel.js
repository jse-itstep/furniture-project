console.log('assel');

let carArray = JSON.parse(localStorage.getItem('cars'));
let div = document.querySelector(".div");

function drawCar(carArray){
    for(let item of carArray){
        div.innerHTML += `
        <p>&#128663;</p>
        <p>model: ${carArray.model}</p>
        <p>color: ${carArray.color}</p>
        <p>year: ${carArray.year}</p>
        <p>price: ${carArray.price}</p>
        <p>country: ${carArray.country}</p>        
        `
    }
};

drawCar(carArray);