function youtube(id) {
  return "https://scratch.mit.edu/discuss/youtube/" + id + "/";
}

function encryptedThingy(file) {
  var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19RH+ol6lOt7Bicw7bh7rNgX6Ig888aBUwWOHECfP/LWOQI30TKByoX", "sausage");
  tostring = decrypted.toString(CryptoJS.enc.Utf8);
  return "https://" + tostring + "/" + file;
}
