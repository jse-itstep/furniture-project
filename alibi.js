let musicArray = JSON.parse(localStorage.getItem("music"));
let div = document.querySelector("#div");

function drawMusic(){
    for(let music of musicArray){
        div.innerHTML += `
            <p>name: ${music.name}</p>
            <p>genre: ${music.genre}</p>
            <p>singerName: ${music.singerName}</p>
            <p>albumName: ${music.albumName}</p>
            <p>year: ${music.year}</p>
            <hr>
        `
    }
}

drawMusic();