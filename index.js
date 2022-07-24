let players = [
    ["Francis", "Ascendent 1"] , ["Leslie", "Gold 3"]
];

let maps = [];

let playerName = document.getElementById("addPlayerName");
let playerRank = document.getElementById("addPlayerRank");
let btnAdd = document.getElementById("addPlayerBtn");

let mapName = document.getElementById("addMapName");
let btnAddMap = document.getElementById("addMapBtn");
let btnRandomizeMap = document.getElementById("randomizeMapBtn");

let btnRandomize = document.getElementById("randomizeTeamsBtn");


//Adds player to the current player list
function addPlayer() {
    let playersList = document.getElementById("allPlayersList");
    playersList.innerHTML='';

    for (let i = 0; i < players.length; i++) {
        console.log(players[i][0] + "," + players[i][1]);
        playersList.innerHTML += `<td style="font-size: 2vh"><b>${players[i][0]}, ${players[i][1]}</b></td>`
        console.log("next");
    }
}

function addMap() {
    let mapList = document.getElementById("allMapsList");
    mapList.innerHTML='';

    for (let i = 0; i < maps.length; i++) {
        mapList.innerHTML += `<td style="font-size: 2vh"><b>${maps[i]}</b></td>`
        console.log("next");
    }
}

function shufflePlayers(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    console.log(array);
  
    return array;
  }

  function pickMap(array) {
    let mapPick = document.getElementById("mapName");
    let num = maps[Math.floor(Math.random() * maps.length)];
    console.log(num);
    mapPick.innerHTML = "Current Map: " + 
                maps[Math.floor(Math.random() * maps.length)];

    return array;
  }


//Button function
//Adds user to the players
btnAdd.addEventListener('click', () =>{
    if (playerName.value.trim().length == 0)
    {
        alert("Please add a name")
        return false;
    }
    if (playerRank.value.trim().length == 0)
    {
        playerRank.value= "N/A";
    }
    players.push([playerName.value, playerRank.value])
    playerName.value = "";
    playerRank.value = "";
    addPlayer();
    
    console.log(players);
});

btnAddMap.addEventListener('click', () =>{
    if (mapName.value.trim().length == 0)
    {
        alert("Please add a Map")
        return false;
    }
    maps.push(mapName.value);
    console.log(maps);
    mapName.value = '';
    addMap();

});

btnRandomizeMap.addEventListener('click', () =>{
    pickMap();

});

btnRandomize.addEventListener('click', () =>{
    shufflePlayers(players);
    teamOneList.innerHTML = '';
    teamTwoList.innerHTML = '';

    let half = Math.ceil(players.length/2);
    let teamOne = players.slice(0, half);
    let teamTwo = players.slice(half);

    console.log(teamOne);
    console.log(teamTwo);

    for (let i = 0; i < teamOne.length; i++) {

        teamOneList.innerHTML += `<td style="font-size: 2vh"><b>${teamOne[i][0]}, ${teamOne[i][1]}</b></td>`;
        teamTwoList.innerHTML += `<td style="font-size: 2vh"><b>${teamTwo[i][0]}, ${teamTwo[i][1]}</b></td>`;
    }
    
});

