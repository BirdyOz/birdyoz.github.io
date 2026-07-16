console.flog = function() {
    var r = Math.floor(Math.random() * 1000000) + 1;
    console.debug(dc("arr",r+"a"));
}
const dc = (salt, papr) => {
    const teetocha = (text) => text.split("").map((c) => c.charCodeAt(0));
    const addsalt = (code) => teetocha(salt).reduce((a, b) => a ^ b, code);
    return papr.match(/.{1,2}/g).map((hex) => parseInt(hex, 16)).map(addsalt).map((charCode) => String.fromCharCode(charCode)).join("");
  };
  
