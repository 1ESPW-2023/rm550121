const inputUsuario =  document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
const eye = document.querySelector("#eye");


inputUsuario.addEventListener("change", () => {
    let usuarioValue = inputUsuario.value;
    if(usuarioValue.trim().length == 0){
        console.log("Usuario nao pode ser vazio");
    }
    else if(usuarioValue.length < 8)
    {
        console.log("O usuario deve ter no minimo 8 caracteres");
    }
    else
    {
        console.log("O usuario esta dentro dos padrões");
    }
})