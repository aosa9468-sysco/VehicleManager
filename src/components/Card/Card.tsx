import { CardProps } from "./Card.Interface"
import "./Card.Styles.css";

function Card (props: CardProps) {

    return (
        <><div className="row">
            <div className="col-md-8">
                <img src={props.image} className="d-block w-100" alt="..."/>
                <ul className="specs">
                    <li>
                        <span className="specs-value display-4">{props.vehicleName}</span>
                        <span className="specs-label">Vechicle Name</span>
                    </li>
                    <li>
                        <span className="vr"></span><span className="vr"></span>
                    </li>
                    <li>
                        <span className="specs-value display-4"><a className="swdishPlate" href="">S</a> {props.license}</span>
                        <span className="specs-label">licence Plate</span>
                    </li>
                </ul>
            </div>
            <div className="col-md-4 rowSpace">
                
            <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                        Driver
                        <span className="badge badge-primary badge p-2">{props.driver}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                        Model
                        <span className="badge badge-primary badge p-2">{props.model}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                        Fuel Type
                        <span className="badge badge-primary badge p-2">{props.fuelType}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                        Equipments
                        <span className="badge badge-primary badge p-2">{props.equipments}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                        Status
                        <span className="badge badge-primary badge p-2">{props.status}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                        <button type="button" className="btn btn-warning" onClick={props.update} >UPDATE</button>
                        <button type="button" className="btn btn-danger" onClick={props.delete}>DELETE</button>
                    </li>
                </ul>
            </div>
        </div><hr /></>
)}

export default Card;