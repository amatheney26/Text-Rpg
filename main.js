var day = 1;
explain = function() {
  window.location.replace('explain.html');
}

exit = function() {
  window.location.replace('https://www.google.com');
}
Continue1 = function() {
  window.location.replace('Option1.html');
}
Option1yes = function() {
  window.location.replace('Option2.html');
  day + 1;
}
Option1no = function() {
  window.location.replace('Option3.html');
}

var health = 100;
var strength = 10;
var knowledge = 10;
var hunger = 0;
var thirst = 0;
document.getElementById('day').innerHTML = "Day: " + day;
document.getElementById('health').innerHTML = "Health: " + health;
document.getElementById('strength').innerHTML = "Strength: " + strength;
document.getElementById('knowledge').innerHTML = "Knowledge: " + knowledge;
document.getElementById('hunger').innerHTML = "Hunger: " + hunger;
document.getElementById('thirst').innerHTML = "Thirst: " + thirst;
