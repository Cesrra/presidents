import { Person } from './person.js'

export class President extends Person {
    constructor(
        id, name, image, lastName,
        description, cityId, startPeriodDate,
        endPeriodDate, politicalParty
    ) {
        super(id, name, image, lastName, description, cityId);
        this.startPeriodDate = startPeriodDate;
        this.endPeriodDate = endPeriodDate;
        this.politicalParty = politicalParty;
    }
}