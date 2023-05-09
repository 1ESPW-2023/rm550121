const divLabels = document.querySelectorAll(".label-float")
const inputUsuario =  document.querySelector("#usuario");
const labelUsuario = document.querySelector("#userLabel");
const inputSenha = document.querySelector("#senha");
const labelSenha = document.querySelector("#senhaLabel")
const eye = document.querySelector("#eye");
const btnEntrar = document.querySelector("button")

btnEntrar.disabled = true; // O botão começa desabilitado para realizar o login

// inputUsuario.addEventListener("change", () => {
//     let usuarioValue = inputUsuario.value;
//     if(usuarioValue.replaceAll(' ', '').length == 0){
//         console.log("Usuario não pode ser vazio");
//         throwErrorMensage("span","Usuario não pode ser vazio!!!",divLabels[0])
//     }
//     else if(usuarioValue.trim().includes(' '))
//     {
//         console.log("Usuario não pode conter espaços!!");
//         throwErrorMensage("span","Usuario não pode conter espaços!!",divLabels[0])
//     }
//     else if(usuarioValue.trim().length < 8)
//     {
//         console.log("Usuario deve ter no minimo 8 caracteres");
//         throwErrorMensage("span","Usuario deve ter no minimo 8 caracteres",divLabels[0])
//     }
//     else
//     {
//         console.log("Usuario esta dentro dos padrões");
//         inputValid("Usuario OK",divLabels[0])
//         UsuarioESenhaCorretos()
//     }
// })

// inputSenha.addEventListener("change", () => {
//     let senhaValue = inputSenha.value;
//     if(senhaValue.replaceAll(' ', '').length == 0){
//         console.log("Senha não pode ser vazia");
//         throwErrorMensage("span","Senha não pode ser vazia!!",divLabels[1])
//     }
//     else if(usuarioValue.trim().includes(' '))
//     {
//         console.log("Senha não pode conter espaços!!");
//         throwErrorMensage("span","Senha não pode conter espaços!!",divLabels[1])
//     }
//     else if(usuarioValue.trim().length < 8)
//     {
//         console.log("Senha deve ter no minimo 8 caracteres");
//         throwErrorMensage("span","Senha deve ter no minimo 8 caracteres",divLabels[1])
//     }
//     else
//     {
//         console.log("Senha esta dentro dos padrões");
//         inputValid("Senha OK",divLabels[1])
//         UsuarioESenhaCorretos()
//     }
// })

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

// function throwErrorMensage(type, text, element)
// {
//     let mensagem = document.createElement(type);
//     mensagem.innerHTML = text;
//     mensagem.className = "error"
//     mensagem.style.color = "Red"
//     let children
//     if(this.name == "Password")
//         children = element.children[3]
//     else
//         children = element.children[2]
//     if(children == undefined)
//         element.appendChild(mensagem);
//     else if(children.className != "error")
//     {
//         element.removeChild(children);
//         element.appendChild(mensagem);
//     }
//     else
//         children.textContent = text
// }
// function inputValid(text,element)
// {
//     let mensagem = document.createElement("span")
//     mensagem.style.color = "Green"
//     mensagem.className = "checked"
//     mensagem.innerHTML = text
//     if(element.children[2] == undefined)
//         element.appendChild(mensagem);
//     else if(element.children[2].className != "checked")
//     {
//         element.removeChild(element.children[2]);
//         element.appendChild(mensagem);
//     }
//     else
//         element.children[2].textContent = text
// }

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