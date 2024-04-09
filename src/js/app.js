import { PresidentController } from './controllers/presidentController.js'
import { CityController } from './controllers/cityController.js'

class Main {
    #presidentController
    #presidents
    #cityController

    constructor() {
        this.#presidentController = new PresidentController()
        this.#cityController = new CityController()
    }

    async init() {
        this.#presidents = await this.#presidentController.fetchPresidentData()
    }
}

new Main().init()