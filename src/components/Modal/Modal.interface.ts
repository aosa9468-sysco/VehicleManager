
export interface ModalProps {
    defaultChecked: any;
    onChangeEquipments: any;
    onChangeFuelType: any;
    onChangeStatus: any;
    driverName: string | number | string[] | undefined;
    onChangeDriver: any;
    onChangeName: any;
    onChange: any;
    onSubmit: any;
    handleClose: any;
    show: boolean;
    status: string;
    equipments: Array<string>;
    fuelType: string;
    model: string;
    license: string;
    vehicleName: string;
    image: string | undefined;
}