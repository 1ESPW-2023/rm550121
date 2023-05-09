// const divElement = document.getElementById('div-box')

// divElement.addEventListener("click", mostraElemento)

// function mostraElemento() {
//     console.log(divElement)
// }

// function soma()
// {
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }
// arrayLiElements = [...document.querySelectorAll('li')];

// arrayLiElements.map((e,i)=>{
//     if(e.textContent.indexOf('1') != (-1))
//     {
//         e.textContent = '[ ' + e.textContent + ' ]'
//     }
// });

// console.log(arrayLiElements);

let tmp = 0

function mudaCor()
{
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    const elemento = [...document.getElementsByClassName("conteudo")][0]
    elemento.style.backgroundColor = `rgb(${r},${g},${b})`

    tmp = setTimeout(mudaCor, 100);
}
//mudaCor()

function pararTimeout()
{
    clearTimeout(tmp);
}

// REALIZAR O BANNER

b = 1
e = 1
let tmp_b = 0;
let tmp_e = 0;
function baner_d()
{
    let url = "";
    switch (b) {
        case 1:
            url = "./img/banner-lateral-1.png"
            break;
        case 2:
            url = "./img/banner-lateral-2.png"
            break;
        case 3:
            url = "./img/banner-lateral-3.png"
            break;
        default:
            break;
    }
    // O SELETOR ACEITA O EFEITO CASCATA, PODENDO ACESSAR DIRETAMENTO OS ELEMENTOS FILHOS
    baner = document.querySelector(".l-d > img");
    baner.src = url;
    if(b < 3)
    {
        b++;
    }
    else
    {
        b = 1;
    }
    tmp_b = setTimeout(baner_d, 2000);
}

function baner_e()
{
    let url = "";
    switch (e) {
        case 1:
            url = "./img/banner-lateral-3.png"
            break;
        case 2:
            url = "./img/banner-lateral-1.png"
            break;
        case 3:
            url = "./img/banner-lateral-2.png"
            break;
        default:
            break;
    }

    baner = document.querySelector(".l-e > img");
    baner.src = url;
    if(e < 3)
    {
        e++;
    }
    else
    {
        e = 1;
    }
    tmp_e = setTimeout(baner_e, 2000);
}

baner_d();
baner_e();

button = document.querySelector(".conteudo > button");
button.addEventListener("click", () => {
    img = document.querySelector(".conteudo > div > img");
    if (button.innerText == "LIGAR")
    {
        img.src = "./img/pic_bulbon.gif"
        button.innerText = "DELIGAR"
    }
    else if (button.innerText == "DELIGAR")
    {
        img.src = "./img/pic_bulboff.gif"
        button.innerText = "LIGAR"
    }
})