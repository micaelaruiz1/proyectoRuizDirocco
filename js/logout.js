let logout = document.querySelector('#logout')

logout.addEventListener('click', function(e) {
    e.preventDefault()
    localStorage.clear()
    location.reload()
})