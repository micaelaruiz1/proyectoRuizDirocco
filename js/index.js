// mas de tres caracteres en el campo de busqueda
let respBusqueda = document.querySelector('.busq-header')
let formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let texto = respBusqueda.value
    if (texto == "") {
        alert("El campo de búsqueda está vacío")
    }else if (texto.length < 3) {
       
        alert("El término debe tener al menos 3 caracteres")
    }else{
        window.location.href = `search-results.html?busqueda=${texto}`
    }
})


// aparecen las categorias de la api
let categoria = document.querySelector('.ul2')
let urlCategorias = `https://dummyjson.com/products/category-list`
fetch (urlCategorias)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data) // DATA SERIA LA LISTA
        categoria.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            categoria.innerHTML += `<li class='li2'><a href='./category.html?Categorias=${data[i]}'>${data[i]}</a></li>`
        }})
    .catch(function(error) {
        console.log("Error: " + error)
    })



// productos no estaticos en el home
// productos top:
let catalogoTop = document.querySelector('.catalogo-top')
let urlCatalogo = `https://dummyjson.com/products?limit=10&sortBy=rating&order=desc`
fetch (urlCatalogo)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data) // DATA SERIA UN OBJETO DE PRODUCTOS
        let productos = data.products // lista de objetos
        for (let i = 0; i < productos.length; i++) {
            catalogoTop.innerHTML += `
            <article class="productos-top">
                <img class="imagen-top" src=${productos[i].thumbnail} alt=${productos[i].title}>
                <h4 class="titulo-producto">${productos[i].title}</h4>
                <p class="p-producto">${productos[i].description}</p>
                <p class="p-producto"><strong>Precio:</strong> ${productos[i].price}</p>
                <a class="ver-detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>`
        }})
    .catch(function(error) {
        console.log("Error: " + error)
    })


// categoria a mi eleccion:
let catalogoAleatorio = document.querySelector('.catalogo-aleatorio')
let urlCatalogoA = `https://dummyjson.com/products/category/beauty`
fetch (urlCatalogoA)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data) // DATA SERIA UN OBJETO DE PRODUCTOS
        let productos = data.products // lista de objetos
        for (let i = 0; i < productos.length; i++) {
            catalogoAleatorio.innerHTML += `
            <article class="productos-top">
                <img class="imagen-top" src=${productos[i].thumbnail} alt=${productos[i].title}>
                <h4 class="titulo-producto">${productos[i].title}</h4>
                <p class="p-producto">${productos[i].description}</p>
                <p class="p-producto"><strong>Precio:</strong> ${productos[i].price}</p>
                <a class="ver-detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
            </article>`
        }})
    .catch(function(error) {
        console.log("Error: " + error)
    })
