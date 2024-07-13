
const color = {
    body: '#d63b3b',
    p: "#388e3c",
    div: '#1565c0',
    span: '#bcb92a',
    ul: '#82480b',
    ol: "#b937a8",
    form: "#6b10a9",
    padrao: '#05121d',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = '#616161'

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = color.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})