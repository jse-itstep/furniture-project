console.log("aru")


let furnitureArray = JSON.parse(localStorage.getItem("furniture"))
let div = document.querySelector(".block")

function drawFurniture(){
    for(let furniture of furnitureArray){
        div.innerHTML += `
            <div class="block">
                <p>view: ${furniture.view}</p>
                <p>bolt: ${furniture.bolts}</p>
                <p>wood: ${furniture.wood}</p>
                <p>color: ${furniture.color}</p>
                <p>height: ${furniture.height}</p>
            </div>
        `
    }
}

drawFurniture()