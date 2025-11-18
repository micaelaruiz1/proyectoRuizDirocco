function logOut(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    let login = document.querySelector('#lilogin')
    let registro = document.querySelector('#liregistro')
    login.style.display = 'block'
    registro.style.display = 'block'

    let logout = document.querySelector('#logout')
    logout.style.display = 'none'

    let bienvenido = document.querySelector('#bienvenido')
    bienvenido.style.display = 'none'
}