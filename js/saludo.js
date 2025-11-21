let email = localStorage.getItem('email')
let navegacion = document.querySelector('.ul1')

if(email){
    navegacion.innerHTML = `
    <li class = "top" >Bienvenido/a ${email}</li>
    <li class="li1"><a class="a-header" href="./index.html">Home</a></li>
    <li class="li1"><a id="logout" class="a-header" href="#">Logout</a></li>
    `
}else{
    navegacion.innerHTML = `
    <li class="li1"><a class="a-header" href="./index.html">Home</a></li>
    <li class="li1"><a class="a-header" href="./login.html">Login</a></li>
    <li class="li1"><a class="a-header" href="./register.html">Registro</a></li>
    `
}

