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
        this.submit()
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



// que aparezca el producto que apretamos. Solo se va a poder apretar el detalle de un producto en index, category y search
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get('id')


let catalogoAleatorio = document.querySelector('.catalogo')
let urlCatalogoA = `https://dummyjson.com/products/${id}`
fetch (urlCatalogoA)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        catalogoAleatorio.innerHTML = `
        <h2 class="top">${data.title}</h2>
            <section class="product-section1">
                <article class="foto-latte">
                    <img class="imagen-categorias" src='${data.thumbnail}' alt='${data.title}'>
                </article>
                <article class="producto-latte">
                    <p class="product-reviews">${data.description}</p>
                    <ul> 
                        <li class="product-reviews"><strong>Marca: </strong> ${data.brand}</li>
                        <li class="product-reviews"><strong>Descripción: </strong> ${data.description}</li>
                        <li class="product-reviews"><strong>Precio: </strong> $${data.price}</li>
                        <li class="product-reviews"><strong> Stock: </strong> $${data.stock}</li>
                        <li class="product-reviews">
                            <strong>Categoría: </strong>
                            <a href="./category.html?cat=${data.category}"> ${data.category}</a>
                        </li>
                    </ul>
                    
                    <div class="tags">
                        <p class="product-reviews"> <strong>Tags:</strong> </p>
                        <ul class="ul1"> </ul>
                    </div>
                </article>
            </section>
            
            <h2 class="top">Reviews</h2>
            <section class="product-section2"></section>
            `
            
            let tagsHTML = document.querySelector(".tags .ul1")
            for (let i = 0; i < data.tags.length; i++) {
            tagsHTML.innerHTML += `<li class="li1">${data.tags[i]}</li>`
            console.log("tags desde la API:", data.tags);
            }


            let reviewsHTML = document.querySelector(".product-section2")
            for (let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews[i]
                reviewsHTML.innerHTML += `
                    <article class="reviews">
                        <p><strong>User:</strong> ${review.reviewerName}</p>
                        <p><strong>Rating:</strong> ${review.rating}/5 </p>
                        <p class="product-reviews"> <em>${review.comment} </em> </p>
                        <p  class="personas"> ${review.date}</p>
                        
                    </article> `} 
    })
    .catch(function(error) {
        console.log("Error: " + error)
    })
