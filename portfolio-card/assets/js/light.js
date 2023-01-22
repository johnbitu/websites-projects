const html = document.querySelector("html")
const checkbox =  document.querySelector("input[name=theme]")

const initialColors = {
    bg: window.getComputedStyle(html).getPropertyValue(" ")
}



const changeColors = (colors) => {

}


checkbox.addEventListener("change", ({target}) => {
    target.checked
})