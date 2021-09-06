var selectPlayersButtons = document.getElementsByClassName("selectPlayersButton");

selectPlayersButtons[0].onclick = function() { startGame(1) }
selectPlayersButtons[1].onclick = function() { startGame(2) }
selectPlayersButtons[2].onclick = function() { startGame(3) }
selectPlayersButtons[3].onclick = function() { startGame(4) }

function startGame(players) {
    document.getElementById('startDiv').style.display = "none";
    var statsDiv = document.getElementById('statsDiv');
    statsDiv.style.display = "block";
    
    var base = document.getElementById('playerScore1');
    for (var player = 1; player < players; player++) {
        console.log(player)
        var statsForPlayer = base.cloneNode(true);
        statsForPlayer.id = 'playerScore'+(player + 1)

        var title = statsForPlayer.children[0];
        title.innerHTML = "Stats for Player "+(player + 1)

        statsDiv.appendChild(statsForPlayer);
    }
}

document.addEventListener("click", (event) => {
    if(event.target && event.target.tagName == "INPUT" && event.target.type == "button") {
        var numberStat = event.target.parentElement.children[0];
        numberStat.value = parseInt(numberStat.value) + parseInt(event.target.value);
        if(numberStat.value > 100) numberStat.value = 100;
        else if(numberStat.value < 0) numberStat.value = 0;
    }
})