class Game{
    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val()
        });
    }
    updateGameState(){
        database.ref("/").update({
            "gameState":gameState
        });

    }
    start(){
        if(gameState==0){
            formObj=new Form()
            playerObj=new Player()
            playerObj.getPlayerCount()
            formObj.display()
        }
    }
}