class Player{
    constructor(){
        this.name = null;
        this.index = null;
    }

    getCount(){
        //code to read data from database
        var playerCountRef  = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
           
    }
        
    updateCount(count){
        //Code to write data to gameState
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerRef = "players/player"+ this.index
        database.ref(playerRef).set({
            name: this.name
        })
    }

}