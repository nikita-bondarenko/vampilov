const searchForm = document.getElementById('search-form')
const searchOpenButton = document.getElementById('search-open')
const searchSubmitButton = document.getElementById('search-submit')
const searchInput = document.getElementById('search-input')

 export const animateSearch = () => {

    searchOpenButton.addEventListener('click', (e) => {
        e.stopPropagation()
        searchForm.classList.toggle("open")
    })

     searchForm.addEventListener('submit', (e) => {
         e.preventDefault()
         searchForm.classList.remove("open")
         setTimeout(() =>searchInput.value = '', 800 )

     })

     document.body.addEventListener('click', (e) => {
         searchForm.classList.remove("open")
     })

     searchForm.addEventListener('click', (e) => {e.stopPropagation()})


 }


