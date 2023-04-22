function dodajAkapit() {
    var input = document.getElementById("input-tekst");
    var tekst = input.value;
    var nowyAkapit = document.createElement("p");
    var tekstAkapitu = document.createTextNode(tekst);
    nowyAkapit.appendChild(tekstAkapitu);
    var div = document.getElementById("akapity");
    div.appendChild(nowyAkapit);
    input.value = "";
  }