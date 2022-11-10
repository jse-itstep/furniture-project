console.log('assel');

let carArray = JSON.parse(localStorage.getItem('cars'));
let div = document.querySelector(".div");

function drawCar(carArray){
    for(let item of carArray){
        div.innerHTML += `
        <p>&#128663;</p>
        <p>model: ${item.model}</p>
        <p>color: ${item.color}</p>
        <p>year: ${item.year}</p>
        <p>price: ${item.price}</p>
        <p>country: ${item.country}</p>        
        `
    }
};

drawCar(carArray);