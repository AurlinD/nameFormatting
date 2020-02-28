const nameInverter = function(name) {
  const fullname = name.split(" ");
  if (name === "") {
    return "";
  } else if (name[0] === " " || name[name.length - 1] === " ") {
    return name.trim();
  } else if (fullname.length == 2) {
    return fullname[1] + ", " + fullname[0];
  }

  return name;
};

const person = "Aurlin Dhillon";
nameInverter(person);

module.exports = nameInverter;
