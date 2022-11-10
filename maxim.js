let users = JSON.parse(localStorage.getItem("user")) || []
let div = document.querySelector("#div")



function drawUser(){
    for(let user of users){
        div.innerHTML += `
        <br><br><br>
        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
        <p>Email: ${user.mail}</p>
        <p>Growth: ${user.hight}</p>
        <p>Weight: ${user.weight}</p>
        `
    }
}

drawUser()