function commands() {
  switch(command[0]) {
  case "about":
    output.innerHTML += `<div>
    <p>Created by (Sausage)McSauce / Jammum</p>
    <p>Code at <a href="https://github.com/SausageMcSauce/wikios"></a> (more information at the README) and under MIT License</p>
    <p>Based on this thing:</p>
    <img src="./assets/img/mee.png" alt="blue square with eyes and mouth or something"> 
    </div>`;
    break;
  case "jammum":
      output.innerHTML += `<img src="./assets/img/toothpaste.png" alt="nonexistent toothpaste ad" height="400">`
      break;
  case "help":
      output.innerHTML += youtube("2Q_ZzBGPdqE");
      break;
  default:
      output.innerHTML += `<p style="color:red">Error: Command does not exist</p>`
  }
}
