const nameInverter = function(name) {
  var n = name;

  if (name === "") {
    return "";
  }
  if (name[0] === " " || name[name.length - 1] === " ") {
    n = name.trim();
  }
  var fullname = n.split(" ");

  if (fullname.length == 2 && !n.includes(".")) {
    return fullname[1] + ", " + fullname[0];
  }
  if (name.includes(".") && fullname.length == 1) {
    return "";
  }

  if (fullname.length == 2 && n.includes(".")) {
    return n;
  }

  if (name.includes(".") && fullname.length == 3) {
    return fullname[0] + " " + fullname[2] + ", " + fullname[1];
  }

  return n;
};

module.exports = nameInverter;
