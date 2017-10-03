function criarParagrafo(){
  var para = document.createElement("P");
  var t = document.createTextNode("Isso eh um paragrafo");
  para.id="P";
  para.appendChild(t);
  document.body.appendChild(para);
}

function removerParagrafo(){
  var para = document.getElementById("P");
  para.parentNode.removeChild(para);
}
