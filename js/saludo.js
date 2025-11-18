let email = localStorage.getItem('email')

if(email){
    let login = document.querySelector('#lilogin')
    let registro = document.querySelector('#liregistro')
    login.style.display = 'none'
    registro.style.display = 'none'

    let ulcontenedor = document.querySelector('.ul1')

    let li1 = document.createElement('li')
    li1.classList.add('li1')
    li1.id = 'bienvenido'
    li1.textContent = 'Bienvenido:' + email

    let li2 = document.createElement('li')
    li2.classList.add('li1')
    li2.id = 'logout'
    li2.textContent = 'Logout'
    
    li2.addEventListener('click', function(){
        logOut()
    })

    ulcontenedor.appendChild(li1)
    ulcontenedor.appendChild(li2)
}