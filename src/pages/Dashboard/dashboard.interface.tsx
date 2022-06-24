export interface Vehicle {
    vehicle: any ;
    licensePlate: string;
    id: string;
    name: string;
    driver: string;
    status:  string;
    fuelType: string;
    equipments: string;
    model: string;
    image: undefined
}

export interface Equipment{
    id: string,
    name: string
}