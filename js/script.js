"use strict";

var url = "https://api.icndb.com/jokes/random";

// button get-joke
var button = document.getElementById("get-joke");
button.addEventListener("click", function() {
  getJoke();
});

// paragraph - where joke is displayed
var paragraph = document.getElementById("joke");

// get joke function
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

getJoke();
