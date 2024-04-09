import { President } from '../models/president.js'
import { CityController } from './cityController.js'

export class PresidentController {
    #apiUrlPresident
    #cityController

    constructor() {
        this.#apiUrlPresident = 'https://api-colombia.com/api/v1/President'
        this.#cityController = new CityController()
    }

    async fetchPresidentData() {
        try {
            const response = await fetch(this.#apiUrlPresident)
            if (!response.ok) {
                throw new Error('Failed to fetch president data')
            }
            const presidentData = await response.json()        
            return presidentData.map(president => this.processPresidentData(president))
        } catch (error) {
            console.error('Error fetching president data:', error)
            return []
        }
    }

    processPresidentData(presidentData) {
        return new President(
            presidentData.id,
            presidentData.name,
            presidentData.image,
            presidentData.lastName,
            presidentData.description,
            presidentData.cityId,
            presidentData.startPeriodDate,
            presidentData.endPeriodDate,
            presidentData.politicalParty
        )
    }

    async getbyId(presidentId) {
        try {
            const response = await fetch(`${this.#apiUrlPresident}/${presidentId}`)
            if (!response.ok) {
                throw new Error('Failed to fetch president by Id')
            }
            const president = await response.json()        
            const city = await this.#cityController.fetchCityData(president.cityId)
            president.city = city.name
            return president
        } catch (error) {
            console.error('Error fetching president by Id:', error)
            return []
        }
    }
}