var input = document.getElementById("commands"); 
var output = document.getElementById("output");
input.addEventListener("keyup", function(event) { // Code based from from W3Schools
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitcommand").click();
    input.value = "";
  }
});

function executeCommand() {
  document.getElementById("output").innerHTML += `<p>&gt; ${input.value}</p>`;
  command = input.value.split(" ");
  commands();
}
