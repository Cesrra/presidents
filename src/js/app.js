import { PresidentController } from './controllers/presidentController.js'
import { PresidentView } from './views/presidentView.js'

class Main {
    #presidentController
    #PresidentView 
    #presidents

    constructor() {
        this.#presidentController = new PresidentController()
        this.#PresidentView = new PresidentView()        
    }

    async init() {
        this.#presidents = await this.#presidentController.fetchPresidentData()
        this.#PresidentView.showOptions(this.#presidents)
        this.#PresidentView.addSelectListener()
    }
}

new Main().init()