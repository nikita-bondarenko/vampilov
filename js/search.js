const searchForms = document.querySelectorAll('.search__form')
const searchOpenButtons = document.querySelectorAll('.search__button')
const searchInputs = document.querySelectorAll('.search__input')
const headerBodyClass = 'search-open'
const formClass = 'open'
const headerBody = document.querySelector('.header__body')
let timeoutId;

 export const animateSearch = () => {
    Array.from(searchOpenButtons).forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation()
                Array.from(searchForms).forEach(form => form.classList.toggle(formClass))
                if(!Array.from(searchForms).some(form => form.classList.value.includes(formClass))) {
                    removeHeaderBodyClass()
                } else {
                    addHeaderBodyClass()                }

            })
        }
    )

     const removeHeaderBodyClass = () => {
         timeoutId = setTimeout(() => {
             clearTimeout(timeoutId)
             headerBody.classList.remove(headerBodyClass)
         }, 800)
     }

     const addHeaderBodyClass = () => {
         clearTimeout(timeoutId)
         headerBody.classList.add(headerBodyClass)
     }

     Array.from(searchForms).forEach(form => {
         form.addEventListener('submit', (e) => {
             e.preventDefault()
             form.classList.remove(formClass)
             removeHeaderBodyClass()
             setTimeout(() => searchInputs.forEach(input => input.value = '' ), 800 )
         })
     })

     document.body.addEventListener('click', (e) => {
         Array.from(searchForms).forEach(form => form.classList.remove(formClass))
         removeHeaderBodyClass()
     })
     Array.from(searchForms).forEach(form => form.addEventListener('click', (e) => {e.stopPropagation()}))
 }


