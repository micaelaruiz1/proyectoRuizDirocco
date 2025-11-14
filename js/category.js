// mas de tres caracteres en el campo de busqueda
let respBusqueda = document.querySelector('.busq-header')
let formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(e) {
    let texto = respBusqueda.value
    if (texto == "") {
        e.preventDefault();
        alert("El campo de búsqueda está vacío")
    }else if (texto.length < 3) {
        e.preventDefault();
        alert("El término debe tener al menos 3 caracteres")
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
        console.log("Error: " + error);
    })



// cuando aprieto una categoria ya no es estatico
let queryString = location.search
console.log (queryString)

let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj)

let cat = queryStringObj.get('Categorias')
console.log(cat)


let tituloCatalogo = document.querySelector('.top')
let seccionCatalogo = document.querySelector('.catalogo-aleatorio')
let urlCatalogoCategorias = `https://dummyjson.com/products/category/${cat}`
fetch (urlCatalogoCategorias )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data) // DATA SERIA UN OBJETO
        let productos = data.products // lista de productos (objetos) de una misma categoria
        tituloCatalogo.innerHTML = cat
        for (let i = 0; i < productos.length; i++) {
            seccionCatalogo.innerHTML += `
            <article class="productos-categoria">
                <img class="imagen-categorias" src="${productos[i].images[0]}" alt="${productos[i].title}">
                <h4 class="titulo-producto">${productos[i].title}</h4>
                <p class="p-producto">${productos[i].price}</p>
                <p class="p-producto"><strong>Precio:</strong> ${productos[i].price}</p>
                <a class="ver-detalle" href="./product.html">Ver detalle</a> 
            </article>
            `
        }}) 
    .catch(function(error) {
        console.log("Error: " + error);
    })

