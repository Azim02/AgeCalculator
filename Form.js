class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder", "Current Year");
      this.input2 = createInput("").attribute("placeholder", "Your Birth Year");
      this.button = createButton('Calculate Age');
      this.text1 = createElement();
      this.text2 = createElement();
    }

    display(){

      this.input.position(25, 200);
      this.input.style('background', 'lightblue');
      
      this.input2.position(205, 200);
      this.input2.style('background', 'lightblue');

      this.button.position(150, 225);
      this.button.style('background', 'yellow');

      this.button.mousePressed(()=>{
        
        finder.currentYear = this.input.value();
        finder.Birthyear = this.input2.value();

        this.text1.html("Your Age is " + (finder.currentYear - finder.Birthyear) + " years");
        this.text1.position(125, 50);
        this.text1.style('background', 'pink');

        this.text2.html("Fill the information once more to calculate again.");
        this.text2.position(20, 350);
        this.text2.style('background', 'white');
      });
    }
}
  