class Form{
    display(){
        var title = createElement('h2')
        title.html("4Race")
        title.position(300,20)

        var input = createInput("Enter your name here")
        input.position(350,200);
        var button = createButton('START')
        button.position(350,250);
        var greeting = createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hi there "+ name + " !")
            greeting.position(300,300)
        })    }
}