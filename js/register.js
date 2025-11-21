let respBusqueda = document.querySelector('.busq-header')
let formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    let texto = respBusqueda.value
    if (texto == "") {
        alert("El campo de búsqueda está vacío")
    }else if (texto.length < 3) {
       
        alert("El término debe tener al menos 3 caracteres")
    }else{
        this.submit()
    }
})


let categoria = document.querySelector('.ul2')
let urlCategorias = `https://dummyjson.com/products/category-list`
fetch (urlCategorias)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data) 
        categoria.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            categoria.innerHTML += `<li class='li2'><a href='./category.html?Categorias=${data[i]}'>${data[i]}</a></li>`
        }})
    .catch(function(error) {
        console.log("Error: " + error)
    })


let formulariologin = document.querySelector('.form-register')
let inputEmail = document.querySelector('#email')
let inputPassword = document.querySelector('#password')
let inputRepeatPassword = document.querySelector('#repeat-password')
let checkTerminos = document.querySelector('#terminos')

formulariologin.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let email = inputEmail.value
    let password = inputPassword.value
    let repeatpassword = inputRepeatPassword.value

    if (email == "") {
        alert("El campo de email está vacío.")
    }else if (password == "") {
        alert("El campo password está vacío.")
    }else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres")
    }else if (password !== repeatpassword) {
        alert("Las contraseñas no coinciden")
    }else if (checkTerminos.value == "") {
        alert("Debes aceptar los términos y condiciones.")
    }else{
        this.submit()
    }
})
