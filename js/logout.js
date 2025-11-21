let logout = document.querySelector('#logout')

logout.addEventListener('click', function(e) {
    e.preventDefault()
    localStorage.clear()
    window.location.href = `index.html`
})