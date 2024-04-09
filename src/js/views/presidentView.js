import { PresidentController } from '../controllers/presidentController.js'

export class PresidentView {
    #selectElement
    #presidentController
    #OPTION = 'option'

    constructor() {
        this.#selectElement = document.querySelector('#select-president')
        this.#presidentController = new PresidentController()
    }

    

    showOptions(presidents) {        
        presidents.forEach(president => {
            const option = document.createElement(this.#OPTION)
            option.value = president.name
            option.id = president.id
            option.textContent = president.name
            this.#selectElement.appendChild(option)
        })
    }

    addSelectListener() {
        this.#selectElement.addEventListener('change', async (event) => {
            const presidentSelectedId = parseInt(event.target.options[event.target.selectedIndex].id)
            const presidentSelected = await this.#presidentController.getbyId(presidentSelectedId)
            this.showInformation(presidentSelected)
        });
    }

    showInformation(president) {
        const card = this.#buildCard(president)
        const container = document.querySelector('#container')
        container.innerHTML = ''
        container.innerHTML = card
    }

    #buildCard(president) {
        return `
        <div id="card" class="card mb-3 shadow-lg">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${president.image}" class="img-fluid rounded-start" alt="${president.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Expresidente ${president.name} ${president.lastName}</h5>
                <p class="card-text">Desde ${president.startPeriodDate} hasta ${president.endPeriodDate}</p>
                <p class="card-text">${president.politicalParty}</p>
                <p class="card-text">Ciudad natal: ${president.city}</p>
                <p class="card-text"><small class="text-body-secondary">${president.description }</small></p>
                </div>
            </div>
            </div>
        </div>
        `
    }
}