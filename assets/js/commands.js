$('body').terminal({
  about: function() {
    this.echo("Created by SausageMcSauce / Jammum");
    this.echo("Code at https://github.com/SausageMcSauce/wikios and under MIT License");
    this.echo("Made using [[!;;;;https://terminal.jcubic.pl/]jQuery Terminal]");
    this.echo("Based on this thing:");
    this.echo("[[@;;;;./assets/img/mee.png]]");
    this.echo(encryptedThingy())
  },
    jammum: function() {
      this.echo("[[@;;;;./assets/img/toothpaste.png]]");
  },
    help: function(contents) {
      this.echo(contents);
      window.open(youtube("2Q_ZzBGPdqE"))
      switch(contents) {
        case "commands" :
          this.echo("TBA");
          break;
        default:
          this.echo("Error: Nothing found")
      }
  },
    cheese: function() {
      this.echo("Does not work");
      //this.echo(encryptedThingy("attachments/289427184467181568/711417946890698783/cheese.mp4"));
  }}, {
    greetings: "Scratch Wiki OS - what even is this?"
});