let toSolve = ''
let method = ''

let firstSmbl = document.querySelector('.first')
let secondSmbl = document.querySelector('.second')
let otvet = document.querySelector('h2')
let span = document.querySelector('span')
let btns = document.querySelectorAll('button')

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        if(e.target.textContent === "=") {
            toSolve = firstSmbl.value + method + secondSmbl.value 
            otvet.textContent = eval(toSolve)
        } else {
            method = btns[i].innerHTML;
            span.textContent = method
        }
    })
}
