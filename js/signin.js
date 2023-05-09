const divLabels = document.querySelectorAll(".label-float")
const inputUsuario =  document.querySelector("#usuario");
const labelUsuario = document.querySelector("#userLabel");
const inputSenha = document.querySelector("#senha");
const labelSenha = document.querySelector("#senhaLabel")
const eye = document.querySelector("#eye");
const btnEntrar = document.querySelector("button")

btnEntrar.disabled = true; // O botão começa desabilitado para realizar o login

inputUsuario.divLabel = divLabels[0];
inputUsuario.childMensagePosition = 2;
inputUsuario.addEventListener("change", checkInput)

inputSenha.divLabel = divLabels[1];
inputSenha.childMensagePosition = 3;
inputSenha.addEventListener("change", checkInput)

function checkInput()
{
    let name = this.name;
    let divLabel = this.divLabel;
    let Value = this.value;
    let childPosition = this.childMensagePosition;
    if(Value.replaceAll(' ', '').length == 0){
        console.log(`${name} não pode ser vazio`);
        //throwErrorMensage(`span`,`${name} não pode ser vazio!!!`,divLabel)
        throwMensagem("span",`${name} não pode ser vazio!!`,"Red","error",divLabel,childPosition);
    }
    else if(Value.trim().includes(' '))
    {
        console.log(`${name} não pode conter espaços!!`);
        //throwErrorMensage(`span`,`${name} não pode conter espaços!!`,divLabel)
        throwMensagem("span",`${name} não pode conter espaços!!`,"Red","error",divLabel,childPosition);
    }
    else if(Value.trim().length < 8)
    {
        console.log(`${name} deve ter no minimo 8 caracteres`);
        //throwErrorMensage(`span`,`${name} deve ter no minimo 8 caracteres`,divLabel)
        throwMensagem("span",`${name} deve ter no minimo 8 caracteres`,"Red","error",divLabel,childPosition);
    }
    else
    {
        console.log(`${name} esta dentro dos padrões`);
        //inputValid(`${name} OK`,divLabel)
        throwMensagem("span",`${name} OK!!`,"Green","checked",divLabel,childPosition);
    }
    UsuarioESenhaCorretos()
}


/*
type = tipo de elemento HTML(span)
text = Texto da mensagem
color = A cor do texto do elemento a ser criado
className = É o nome da classe do elemento a ser criado(error/checked)
element = É o elemento da divLabel para adicionar o filho(Mensagem)
childPosition = É a posição que o elemento deve ficar localizado na listagem de filhos do elemento pai
*/
function throwMensagem(type, text, color, className, element, childPosition)
{
    let mensagem = document.createElement(type);
    mensagem.innerText = text;
    mensagem.style.color = color;
    mensagem.className = className;
    if(element.children[childPosition] == undefined)
        element.appendChild(mensagem);
    else if(element.children[childPosition].className != className)
    {
        element.removeChild(element.children[childPosition]);
        element.appendChild(mensagem);
    }
    else
    {
        element.children[childPosition].textContent = text
    }
}

function UsuarioESenhaCorretos()
{
    if(divLabels[0].childElementCount == 3 && divLabels[1].childElementCount == 4)
    {
        if(divLabels[0].children[2].className == "checked" && divLabels[1].children[3].className == "checked")
        {
            console.log("Tudo certo")
            btnEntrar.disabled = false;
        }
        else
        {
            btnEntrar.disabled = true;
        }
    }
}


eye.addEventListener("click", () => {
    if(eye.className == "fa fa-eye") // Revelar Senha
    {
        inputSenha.type = "password";
        eye.className = "fa fa-eye-slash";
    }
    else // Ocultar Senha
    {
        inputSenha.type = "text";
        eye.className = "fa fa-eye";
    }
})