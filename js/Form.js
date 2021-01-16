class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2");
        title.html("Car Game");
        title.position(400,100);

        var input=createInput("Name");
        input.position(400,200);

        var button=createButton("Play");
        button.position(600,200);

        button.mousePressed(function (){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
        })
    }
}