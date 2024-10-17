const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {
    button.addEventListener("click" , function(){
        const atual = querySelector (".ativo")
        const proximoPasso = "passo" + this.getAtribute("data-proximo")
        atual.classlist.remove("ativo");
        document.getElementById(proximoPasso).classList.add("ativo");
 })
})