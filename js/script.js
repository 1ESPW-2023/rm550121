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
mudaCor()

function pararTimeout()
{
    clearTimeout(tmp);
}