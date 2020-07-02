class Form{
 display(){
     var input=createInput("Name")
     input.position(130,160)
     var title=createElement('h2')
     title.html("Car Racing Game")
     title.position(130,0)
     var button=createButton("SUBMIT")
     button.position(250,200)
     var greetings=createElement("h3")
     button.mousePressed(function(){
         input.hide()
         button.hide()
         greetings.html("Hello!")
         greetings.position(130,160)
     })
}
}