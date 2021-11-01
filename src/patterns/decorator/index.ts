abstract class Car {
    public description: string;

    public getDescription() : string {
        return this.description;
    }

    public abstract cost(): number;
}

export class ModelS extends Car {
    public description = "Model S"

    public cost(): number {
        return 77000;
    }
}

export class ModelX extends Car {
    public description = "Model X"

    public cost(): number {
        return 77100;
    }   
}

abstract class CarOptions extends Car {
    decorateCar: Car;

    public abstract getDescription() : string;
    public abstract cost() : number;
}

export class AutoPilot extends CarOptions {
    decorateCar: Car;

    constructor(car: Car){
        super();
        this.decorateCar = car;
    }

    public getDescription(): string {
        return this.decorateCar.getDescription() + ", AutoPilot.";
    }
    public cost(): number {
        return this.decorateCar.cost() + 1000;
    }
}

export class AirBags extends CarOptions {
    decorateCar: Car;

    constructor(car: Car){
        super();
        this.decorateCar = car;
    }

    public getDescription(): string {
        return this.decorateCar.getDescription() + ", AirBag.";
    }
    public cost(): number {
        return this.decorateCar.cost() + 5000;
    }
}