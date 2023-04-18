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
arrayLiElements = [...document.querySelectorAll('li')];

arrayLiElements.map((e,i)=>{
    if(e.textContent.indexOf('1') != (-1))
    {
        e.textContent = '[ ' + e.textContent + ' ]'
    }
});

// console.log(arrayLiElements);