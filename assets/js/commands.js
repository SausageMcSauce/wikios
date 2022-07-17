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
      let choice = Math.floor(Math.random() * 2) + 1;
      switch(choice) {
        case 1:
          output.innerHTML += `<div><video width="320" height="240" controls>
        <source src="${DCDN("attachments/289427184467181568/711417946890698783/cheese.mp4")}" type="video/mp4">
        video go nope
      </video></div>`;
          break;
        case 2:
          output.innerHTML += `<div><video width="320" height="240" controls>
        <source src="${DCDN("attachments/423525684799995904/886656625597890580/6282.mp4")}" type="video/mp4">
        video go nope
      </video></div>`;
          break;
      }
      break;
    case "noice":
      output.innerHTML += `<img src="${DMedia("attachments/343464479545098242/466971388129837066/unknown.png?width=717&height=630")}" height="500" alt="noice man">`;
      break;
    case "kenny":
      window.open("https://regex101.com/r/QSyeGl/3");
      break;
    case "dictator":
      output.innerHTML += `<img src="${DMedia("attachments/343464479545098242/412543959995252736/disctator.png")}" height="500" alt="hail jvvg">`;
      break;
    case "realdictator":
      output.innerHTML += `<img src="${DMedia("attachments/343464479545098242/706992836633165884/6d17ca30deb801317193005056a9545d.png")}" height="300" alt="she read s:yours">`;
      break;
    case "sudo":
      output.innerHTML += `<p style="color:red">Error: This is not Linux</p>`;
      break;
    case "clock":
      var currenttime = new Date();
      var hours = `${currenttime.getHours()}`.padStart(2, "0");
      var clock = `${hours}:${currenttime.getMinutes()}`;
      output.innerHTML += `<p>Current time: ${clock}</p>`;
      break;
    case "lottery":
      let spin = Math.floor(Math.random() * 10000) + 1;
      switch(spin) {
        case 1:
          output.innerHTML += "<p>You win! Congratulations! 💰 💰 💰</p>";
          break;
        default: 
          output.innerHTML += "<p>You lose! Good day, sir/madam/etc. !</p>";
          break;
      }
  default:
      output.innerHTML += `<p style="color:red">Error: Command does not exist</p>`;
  }
}
