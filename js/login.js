const inputUser = document.querySelector("input[type='text']");
// inputUser.addEventListener("focus", () => {
//     inputUser.setAttribute("style","outline-color: #ff0000;")
// });
inputUser.addEventListener("keyup", () => {

    const labelUser =  document.querySelector("label[for='idNm']")

    if(inputUser.value.length < 5)
    {
        inputUser.setAttribute("style","outline-color: #ff0000;");
        labelUser.setAttribute("style","color: #ff0000;")
    }else
    {
        inputUser.setAttribute("style","outline-color: #00ff00;");
        labelUser.setAttribute("style","color: #00ff00;")
    }
});

const inputPass = document.querySelector("#idPass");

inputPass.addEventListener("keyup", () => {

    const labelPass =  document.querySelector("label[for='idPass']");

    if(inputPass.value.length < 8)
    {
        inputPass.setAttribute("style","outline-color: #ff0000;");
        labelPass.setAttribute("style","color: #ff0000;")
    }else
    {
        inputPass.setAttribute("style","outline-color: #00ff00;");
        labelPass.setAttribute("style","color: #00ff00;")
    }
});

let eye = document.querySelector(".fa-eye-slash");

eye.addEventListener("click", () => {
    if(inputPass.type == "password")
    {
        inputPass.type = "text";
        eye.className = "fa fa-eye";
        eye = document.querySelector(".fa-eye");
    }
    else
    {
        inputPass.type = "password";
        eye.className = "fa fa-eye-slash";
        eye = document.querySelector(".fa-eye-slash");
    }
});
