export class PresidentView {
    constructor() {}

    showOptions(presidents) {
        const selectElement = document.querySelector('#select-president')
        presidents.forEach(president => {
            const option = document.createElement('option')
            option.value = president.name
            option.textContent = president.name
            selectElement.appendChild(option)
        })
    }
}