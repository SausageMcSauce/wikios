function commands() {
  switch(command[0]) {
  case "about":
    output.innerHTML += `<div>
    <p>Created by (Sausage)McSauce / Jammum</p>
    <p>Code at <a href="https://github.com/SausageMcSauce/wikios">https://github.com/SausageMcSauce/wikios</a> (more information at the README) and under MIT License</p>
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
  case "cheese":
      output.innerHTML += `<div><video width="320" height="240" controls>
        <source src="${DCDN("attachments/289427184467181568/711417946890698783/cheese.mp4")}" type="video/mp4">
        video go nope
      </video></div>`;
      break;
    case "noice":
      output.innerHTML += `<img src="${DMedia("attachments/343464479545098242/466971388129837066/unknown.png?width=717&height=630")}" height="500" alt="noice man">`
      break;
  default:
      output.innerHTML += `<p style="color:red">Error: Command does not exist</p>`
  }
}
