const openFormButton = document.querySelectorAll('[data-target]')
const closeFormButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const backgroundParallax = document.getElementById('bod')
const headingParallax = document.getElementById('intro')

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let introOffset = window.pageYOffset - 250;
    console.log(offset)
    backgroundParallax.style.backgroundPositionY = (offset * .5 + 'px');
    
    if(offset >= 250) {
        headingParallax.style.left = ( 275 +introOffset * 6 + 'px')
    } 
    else headingParallax.style.left = 275 + 'px'
})

openFormButton.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.querySelector(button.dataset.target)
        openForm(form)
    })
})
closeFormButton.forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest('#contact-pop')
        closeForm(form)
    })
})
function openForm(form) {
    if (form == null) return
    form.classList.add('active')
    overlay.classList.add('active')
}
function closeForm(form) {
    if (form == null) return
    form.classList.remove('active')
    overlay.classList.remove('active')
}