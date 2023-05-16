


//Recepcionando o objeto que logou no localStorage e imprimindo uma de suas propriedades
const spanUser = document.querySelector("#user");
let usuario = JSON.parse(localStorage.getItem("User"));

if(usuario == null)
{
    console.log("Você não pode acessar essa pagina sem realizar o login");
    setTimeout(function (){
        window.location.href = "./signin-prof.html";
    },1500);
}
else
{
    console.log(usuario.nomeCompleto);
    spanUser.innerHTML = usuario.nomeCompleto;
}