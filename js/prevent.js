export const preventDefault = () => {
        const links = document.getElementsByTagName('a')
        Array.from(links).forEach(link => link.addEventListener('click', (e) => {
            e.preventDefault()
        }))
}

