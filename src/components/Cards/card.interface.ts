import { MouseEventHandler } from "react";

export interface CardProps {
    findEq(eq: any): any;
    delete: MouseEventHandler<HTMLButtonElement> | undefined;
    update: any;
    status: string;
    equipments: Array<string>;
    fuelType: string;
    model: string;
    driver: string;
    license: string;
    vehicleName: string;
    image: string | undefined;
}