import { PresidentController } from './controllers/presidentController.js'
import { CityController } from './controllers/cityController.js'
import { PresidentView } from './views/presidentView.js'

class Main {
    #presidentController
    #PresidentView 
    #cityController

    #presidents

    constructor() {
        this.#presidentController = new PresidentController()
        this.#PresidentView = new PresidentView()
        this.#cityController = new CityController()
    }

    async init() {
        this.#presidents = await this.#presidentController.fetchPresidentData()
        this.#PresidentView.showOptions(this.#presidents)
    }
}

new Main().init()