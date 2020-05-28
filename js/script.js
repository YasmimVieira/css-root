const root = document.documentElement;
const buttonTheme = document.querySelectorAll('.button-theme');

console.log(buttonTheme);

buttonTheme.forEach((button) => {
  button.addEventListener('click', changeTheme)
})

function changeTheme(e){
    switch(this.dataset.theme){
        case 'dark': 
        root.style.setProperty('--main-color', '#000000a8')
        root.style.setProperty('--text-color', '#FFF')
        break
        case 'light': 
        root.style.setProperty('--main-color', '#ecdcdc')
        root.style.setProperty('--text-color', '#2d2a2a')
        break
    }
}