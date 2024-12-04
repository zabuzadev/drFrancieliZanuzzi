document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        // biome-ignore lint/complexity/noForEach: <explanation>
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            } else {
                entry.target.classList.remove('visible')
            }
        })
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    // biome-ignore lint/complexity/noForEach: <explanation>
    elements.forEach(element => {
        observer.observe(element)
    })

    //Get a Year for the footer
    const date = new Date()
    const year = date.getFullYear()
    document.querySelector('.year').textContent = year
})

//page up button
const pageUp = document.querySelector('.page-up')
pageUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
