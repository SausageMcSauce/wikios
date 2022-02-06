$('body').terminal({
  about: function() {
    this.echo("Created by SausageMcSauce / Jammum");
    this.echo("Code at https://github.com/SausageMcSauce/wikios and under MIT License");
    this.echo("Made using [[!;;;;https://terminal.jcubic.pl/]jQuery Terminal]");
    this.echo("Based on this thing:");
    this.echo("[[@;;;;./assets/img/mee.png]]");
  },
    jammum: function() {
    this.echo("[[@;;;;./assets/img/toothpaste.png]]");
  },
  help: function(contents) {
    this.echo(contents);
    switch(contents) {
      case "commands" :
        this.echo("TBA");
        break;
      default:
        this.echo("Error: Nothing found")
    }
  }}, {
    greetings: "Scratch Wiki OS - what even is this?"
});