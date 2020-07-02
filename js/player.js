class Player{
    constructor(){

    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            console.log(data)
            playerCount=data.val()
        })

    }
    updatePlayerCount(){
        database.ref("/").update({
            "playerCount":playerCount
        })

    }
    updateName(){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({
            "name": playerName
        })

    }
}