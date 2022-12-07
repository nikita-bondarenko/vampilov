export const enableMobileNav = () => {

    const bodyClass = 'nav-open'
    const transitionDisableClass = 'transition-disabled'
    const openMenuButton = document.getElementById('menu-bar')
    const nav = document.getElementById('nav-mobile')
    const links = document.getElementsByClassName('nav__link')

    let startX;
    let endX;

    const initTranslating = 280

    const moveBody = (e) => {
        const x = e.touches[0].clientX
        endX = x
        if (startX - x > 0) {
            document.body.style.transform = `translateX(${initTranslating - (startX - x)}px)`
        }
    }

    const openNav = () => {
        document.body.classList.add(bodyClass)
        document.body.style.transform = `translateX(${initTranslating}px)`
    }

    const closeNav = () => {
        document.body.classList.remove(bodyClass)
        document.body.style.transform = `translateX(0px)`
    }

    openMenuButton.addEventListener('click', (e) => {

        if (document.body.classList.value.includes(bodyClass)) return
        e.stopPropagation()
        openNav()
    })
    document.body.addEventListener('click', () => {
        if (!document.body.classList.value.includes(bodyClass)) return
        closeNav()
    })
    nav.addEventListener('click', (e) => {
        e.stopPropagation()
    })
    Array.from(links).forEach(link => link.addEventListener('click', () => {
        closeNav()
    }))

    document.addEventListener('touchstart', (e) => {

        if (document.body.classList.value.includes(bodyClass)) {
            startX = e.touches[0].clientX
            document.body.classList.add(transitionDisableClass)
            document.addEventListener('touchmove', moveBody)
        }
    })

    document.addEventListener('touchend', (e) => {
        if (document.body.classList.value.includes(bodyClass)) {
            document.body.classList.remove(transitionDisableClass)
            document.removeEventListener('touchmove', moveBody)
            if (startX - endX > 150) {
                closeNav()
                return
            }
            openNav()
        }
    })

}




