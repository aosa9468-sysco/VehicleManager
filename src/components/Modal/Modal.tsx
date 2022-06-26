import { indexOf } from "lodash";
import { element } from "prop-types";
import { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getEquipments } from "../../services/equipments.service";
import { findEquipmentName, getEquipmentId, getEquipmentName, getSelectedEqsName } from "../../util/util";
import { ModalProps } from "./Modal.interface";

function ModalShow(props: ModalProps) {
  //const [selectedEqs,setSelectedEqs] = useState(props.defaultChecked);
  let selectedEqs: any[] =  props.defaultChecked;

  const handleInputChange = (event: any) => {
    if(props.defaultChecked.length > 0){
      props.defaultChecked.map((eq: any) => {
        let name = findEquipmentName(eq,props.equipments);
        if(!selectedEqs.includes(name) && name !== undefined){
          selectedEqs.push(findEquipmentName(eq,props.equipments))
        } 
      })
    }
    const target = event.target;
    let value = target.value;
    if (target.checked) {
      selectedEqs.push(value);
    } else {
      let eqName = getEquipmentId(value,props.equipments);
      let indexOfVal = selectedEqs.indexOf(value);
      if(indexOfVal > -1){
        selectedEqs.splice(indexOfVal, 1);
      }
      let indexOfStr = selectedEqs.indexOf(eqName);
      if(indexOfStr > -1){
        selectedEqs.splice(indexOfStr, 1);
      }
    }
  };

  const checkDefaultEnabled = (equipments: any,index: number) => {
    return equipments.includes(index);
    
  }

  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <Form onSubmit={props.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={props.vehicleName}
              required
              onChange={(e) => props.onChangeName(e)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Driver</Form.Label>
            <Form.Control
              type="text"
              value={props.driverName}
              onChange={props.onChangeDriver}
              placeholder="Enter Driver"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Default select example" onChange={props.onChangeStatus} value={props.status}>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProfession">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Select aria-label="Default select example" onChange={props.onChangeFuelType} value={props.fuelType}>
              <option value="LNG" selected={true}>LNG</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG</option>
              <option value="Electrical">Electrical</option>
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProfession">
            <Form.Label>Equipments</Form.Label>
            {props.equipments.map((equipment, index) => (
              <div key={`inline-checkbox`} className="mb-3">
                <Form.Check
                  inline
                  label={equipment}
                  name="group1"
                  type="checkbox"
                  value={equipment}
                  defaultChecked={checkDefaultEnabled(props.defaultChecked,index+1)}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
            ))}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={() => props.handleClose(props.defaultChecked)}>
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalShow;

