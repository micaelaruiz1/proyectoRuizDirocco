let respBusqueda = document.querySelector('.busq-header')
let formulario = document.querySelector('.formulario')
let catalogoSearch = document.querySelector('.catalogo')

let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let textoUsuario = queryStringObj.get('busqueda')

buscarProductos(textoUsuario) //ir a lo que ya se busco

// si se quiere volver a buscar:
// mas de tres caracteres en el campo de busqueda
formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    let texto = respBusqueda.value //saco el valor del input
    if (texto == "") {
        alert("El campo de búsqueda está vacío")
    }else if (texto.length < 3) {
       
        alert("El término debe tener al menos 3 caracteres")
    }else{
        window.location.href = `search-results.html?busqueda=${texto}` // se vuelve a esta pagina y se ejecuta la funcion
    }
})

// que el usuario busque algo y sea dinamico
function buscarProductos (texto){
    let urlSearch = `https://dummyjson.com/products/search?q=${texto}`
    fetch (urlSearch)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data) // DATA SERIA UN OBJETO DE PRODUCTOS
            let productos = data.products // lista de objetos

            if (productos.length === 0) {
                catalogoSearch.innerHTML = `
                <h1 class="top"> No se encontraron resultados para <strong>"${texto}"</strong>. Probá con otro término.</h1>`
            } else{
                catalogoSearch.innerHTML = `
                <h1 class="top">Mostrando resultados para <strong>"${texto}"</strong>.</h1>
                
                <section class="catalogo-aleatorio">
                </section>
                `

                for (let i = 0; i < productos.length; i++) {
                let seccionSearch = document.querySelector('.catalogo-aleatorio')
                seccionSearch.innerHTML += `
                <article class="productos-categoria">
                    <img class="imagen-categorias" src=${productos[i].thumbnail} alt=${productos[i].title}>
                    <h4 class="titulo-producto">${productos[i].title}</h4>
                    <p class="p-producto">${productos[i].description}</p>
                    <p class="p-producto"><strong>Precio:</strong> ${productos[i].price}</p>
                    <a class="ver-detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                </article>`
            }}})
        .catch(function(error) {
            console.log("Error: " + error)
        })
}



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
