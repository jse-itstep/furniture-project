let computerArray = JSON.parse(localStorage.getItem("computer"))
let div = document.querySelector("#computer")

function drawComputer(){
	for(let computer of computerArray){
		div.innerHTML += `
	<div class="computer">
		<p>name: ${computer.name}</p>
		<p>diagonal: ${computer.diagonal}</p>
		<p>matrixType: ${computer.matrixType}</p>
		<p>screenResolution: ${computer.screenResolution}</p>
		<p>format: ${computer.format}</p>
		<p>interface: ${computer.interface}</p>
		<p>matrixBrightness: ${computer.matrixBrightness}</p>
		<p>prise: ${computer.prise}
	</div>`;	
	}
}