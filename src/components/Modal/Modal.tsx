import {
    Button,
    Form,
    Modal
  } from "react-bootstrap";
import { ModalProps } from "./Modal.interface";

function ModalShow(props: ModalProps){
    return(
        <Modal size="lg" show={props.show} onHide={props.handleClose}>
            <Form
              onSubmit={props.onSubmit}
            >
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
                  <Form.Control
                    type="text"
                    value={props.status}
                    onChange={props.onChangeStatus}
                    placeholder="Enter Status"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={props.fuelType}
                    onChange={props.onChangeFuelType}
                    placeholder="Enter Fuel Type"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfession">
                  <Form.Label>Equipments</Form.Label>
                  <Form.Control
                    type="text"
                    value={props.equipments.toString()}
                    onChange={props.onChangeEquipments}
                    placeholder="Enter Equipments"
                  />
                  <Form.Label>1: Crane, 2: Tachograph, 3: Fire Extinguisher, 4: Hook, 5: Custom equipment</Form.Label>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="primary" type="submit" onClick={props.handleClose}>
                    Update
                  </Button>
              </Modal.Footer>
            </Form>
          </Modal>
    )
}

export default ModalShow;