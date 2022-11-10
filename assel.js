console.log('assel');

let carArray = JSON.parse(localStorage.getItem('cars'));
let div = document.querySelector(".div");

function drawCar(carArray){
    for(let item of carArray){
        div.innerHTML += `
        <p>&#128663;</p>
        <p>model: ${model}</p>
        <p>color: ${color}</p>
        <p>year: ${year}</p>
        <p>price: ${price}</p>
        <p>country: ${country}</p>        
        `
    }
};

drawCar(carArray);