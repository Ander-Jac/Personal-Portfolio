const openFormButton = document.querySelectorAll("[data-target]")
const closeFormButton = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openFormButton.forEach(button => {
    button.addEventListener("click", () => {
        const form = document.querySelector(button.dataset.target)
        openForm(form)
    })
})
closeFormButton.forEach(button => {
    button.addEventListener("click", () => {
        const form = button.closest("#contact-pop")
        closeForm(form)
    })
})
function openForm(form) {
    if (form == null) return
    form.classList.add("active")
    overlay.classList.add("active")
}
function closeForm(form) {
    if (form == null) return
    form.classList.remove("active")
    overlay.classList.remove("active")
}