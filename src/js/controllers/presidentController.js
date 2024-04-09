import { President } from '../models/president.js'

export class PresidentController {
    #apiUrlPresident
    constructor() {
        this.#apiUrlPresident = 'https://api-colombia.com/api/v1/President'
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
}