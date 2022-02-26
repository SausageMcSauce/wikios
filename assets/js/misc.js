function youtube(id) {
  return `<iframe class="youtube-player" type="text/html" width="400" height="300" src="//www.youtube.com/embed/${id}?fs=1&amp;rel=0&amp;autoplay=1&amp;showinfo=0" frameborder="0"></iframe>` /* copied from the Scratch Discuss Youtube player" */
}

function encryptedThingy(file) {
  var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19RH+ol6lOt7Bicw7bh7rNgX6Ig888aBUwWOHECfP/LWOQI30TKByoX", "sausage");
  tostring = decrypted.toString(CryptoJS.enc.Utf8);
  return "https://" + tostring + "/" + file;
}
