const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {
 button.addEventListener("click" , function(){
const atual = querySelector (".ativo")
const ProxiimoPasso = "passo" + this.getAtribute("data-proximo")
atual.classlist.remove("ativo");
document.getElementById(proximopasso).classList.add("ativo");
 })
})