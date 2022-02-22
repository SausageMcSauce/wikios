var input = document.getElementById("commands"); // Code taken from W3Schools
alert(input);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submitcommand").click();
  }
});

function executeCommand() {
  alert("To be implemented later");
}