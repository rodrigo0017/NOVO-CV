var nome="FUNCIONOU!!!";
var nomeHtml = document.getElementById("nome-no-html");
var cargo = "CTO growdev";
var cargohtml = document.getElementById("cargo-no-html");

function colocarnomenohtml(nome) {
    nomeHtml.innerHTML = nome

}

function logarnome() {
    console.log(nome);
}

colocarnomenohtml(nome);

function colocarcargonohtml(cargo){
    cargohtml.innerHTML = cargo;
}

colocarcargonohtml(cargo);

function cliquenoprojetos(){
    console.log("Clicou no botao projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}
function cliquenosobre(){
    console.log("Clicou no botao sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}
var texto2= document.getElementById("texto-2");
var texto1= document.getElementById("texto-1");
