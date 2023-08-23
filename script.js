let rps = ["Rock", "Paper", "Scissors"];
let rpsEl = document.getElementById("rps-el");
let i = 0
function startGame() {
	i = Math.floor(Math.random()*3)
	rpsEl.textContent = "Computer: " +  rps[i]
}
