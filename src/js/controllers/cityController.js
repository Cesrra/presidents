import { City } from '../models/city.js'

export class CityController {
    #apiUrlCity
    constructor() {
        this.#apiUrlCity = 'https://api-colombia.com/api/v1/city';
    }

    async fetchCityData(cityId) {
        try {
            const response = await fetch(`${this.#apiUrlCity}/${cityId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch city data');
            }
            const cityData = await response.json();
            return this.processCityData(cityData);
        } catch (error) {
            console.error('Error fetching city data:', error);
            return null;
        }
    }

    processCityData(cityData) {
        return new City(
            cityData.id,
            cityData.name
        );
    }
}