
function youtube(id) {
  return `<iframe class="youtube-player" type="text/html" width="400" height="300" src="//www.youtube.com/embed/${id}?fs=1&amp;rel=0&amp;autoplay=1&amp;showinfo=0" frameborder="0"></iframe>` /* copied from the Scratch Discuss Youtube player" */
}

function DDecrypt(name) {
  var decrypted = CryptoJS.AES.decrypt(name, "sausage");
  return decrypted.toString(CryptoJS.enc.Utf8);
}

function DCDN(file) {
  var decrypted = DDecrypt("U2FsdGVkX19RH+ol6lOt7Bicw7bh7rNgX6Ig888aBUwWOHECfP/LWOQI30TKByoX");
  return "https://" + decrypted + "/" + file;
}

function DMedia(file) {
  var decrypted = DDecrypt("U2FsdGVkX1/h1VjI71Cvw4LZddxMiCfPIFjdUvQhHvlQFLvb2cS4aflzP+on9rYb");
  return "https://" + decrypted + "/" + file;
}

