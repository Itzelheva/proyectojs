const botonMode = document.querySelector('#oscuro-claro')
const body = document.querySelector('.modo-claro')

botonMode.onclick = () => {
    body.classList.toggle('modo-oscuro')
    if(body.className === 'modo-claro modo-oscuro'){
        botonMode.textContent = 'Light Mode'
    } else {
        botonMode.textContent = 'Dark Mode'
    }
}