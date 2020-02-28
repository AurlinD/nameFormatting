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

  return n;
};

const person = "Dr. firt";
nameInverter(person);

module.exports = nameInverter;
