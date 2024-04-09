import { Person } from './person'

export class President extends Person {
    constructor(
        id, name, image, lastName,
        description, city, startPeriodDate,
        endPeriodDate, politicalParty
    ) {
        super(id, name, image, lastName, description, city);
        this.startPeriodDate = startPeriodDate;
        this.endPeriodDate = endPeriodDate;
        this.politicalParty = politicalParty;
    }
}