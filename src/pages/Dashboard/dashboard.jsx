import React, { useEffect, useState } from "react";
import "./dashboard.styles.css";
import {
  deleteVehicle,
  getVehicles,
  updateVehicle
} from "../../services/vehicle.srvice";
import Card from "../../components/Card/Card";
import { getEquipments } from "../../services/equipments.service";
import Header from "../../components/Header/Header";
import ModalShow from "../../components/Modal/Modal";
import { getCardEquipmentsName, getEquipmentsNames, setEquipmentsValues } from "../../util/util";
import Pagination from "../../components/Pagination/Pagination";

export const Dashboard = () => {
  const initVehicle = {
    id: null,
    name: "",
    driver: "",
    status: "",
    fuelType: "",
    equipments: [],
    model: "",
    licensePlate: "",
    image: "",
  };

  const [vehicles, setVehicles] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [show, setShow] = useState(false);
  const [newVehicle, setNewVehicle] = useState(initVehicle);
  const [editing, setEdit] = useState(false);
  const [selectedEquipments, setSelectedEquipments] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(3);

  useEffect(() => {
    loadVehicles();
    loadEquipments();
  }, [],[]);

  const loadVehicles = () =>{
    getVehicles().then((vehicles) => setVehicles(vehicles.data));
  }

  const loadEquipments = () =>
    getEquipments().then((equipments) => setEquipments(equipments.data));

  const indexOfLastPost = currentPage * vehiclesPerPage;
  const indexOfFirstPost = indexOfLastPost - vehiclesPerPage;
  const currentVehicles = vehicles.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleClose = (selectedEqs) => {
    setShow(false);
    setSelectedEquipments(selectedEqs);
  };

  const handleShow = () => {
    setShow(true);
  };

  const onFormSubmit = (newVehicle) => {
    let clonedVehicle = newVehicle;
    const id = newVehicle.id;
    newVehicle.equipments = selectedEquipments;
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id == newVehicle.id ? newVehicle : vehicle
      )
    );
    clonedVehicle.equipments = setEquipmentsValues(selectedEquipments,equipments);
    clonedVehicle.equipments = [...new Set(clonedVehicle.equipments)];
    updateVehicle(clonedVehicle.id, clonedVehicle);
  };

  const onEdit = (newVehicle) => {
    setNewVehicle(newVehicle);
    handleShow();
  };

  const onUpdateVehicle = (newVehicle) => {
    setEdit(false);
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id == newVehicle.id ? newVehicle : vehicle
      )
    );
  };

  const onSubmit = (newVehicle) => {
    if (editing === true) {
      onUpdateVehicle(newVehicle);
    } else {
      onFormSubmit(newVehicle);
    }
  };

  const onDeleteVehicle = (currentVehicle) => {
    setVehicles(vehicles.filter((i) => i.id !== currentVehicle.id));
    deleteVehicle(currentVehicle.id);
  };

  return (
    <div className="container-fluid bg-holder">
      <Header />
     
      {currentVehicles.length > 0 ? (
        currentVehicles.map((vehicle, index) => (
          <Card
            index={vehicle.id}
            image={vehicle.image}
            license={vehicle.licensePlate}
            vehicleName={vehicle.name}
            status={vehicle.status}
            equipments={vehicle.equipments.length> 0? getCardEquipmentsName(vehicle.equipments,equipments).join(","):[]}
            fuelType={vehicle.fuelType}
            model={vehicle.model}
            driver={vehicle.driver}
            update={() => onEdit(vehicle)}
            delete={() => onDeleteVehicle(vehicle)}
          />
        ))
      ) : (
        <tr>
          <td colSpan={6} className="text-center">
            No vehicle found.
          </td>
        </tr>
      )}

      <ModalShow
        show={show}
        handleClose={(selectedEqs) => handleClose(selectedEqs)}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(newVehicle);
        }}
        vehicleName={newVehicle.name}
        onChangeName={(e) =>
          setNewVehicle({ ...newVehicle, name: e.target.value })
        }
        driverName={newVehicle.driver}
        onChangeDriver={(e) =>
          setNewVehicle({ ...newVehicle, driver: e.target.value })
        }
        status={newVehicle.status}
        onChangeStatus={(e) =>
          setNewVehicle({ ...newVehicle, status: e.target.value })
        }
        fuelType={newVehicle.fuelType}
        onChangeFuelType={(e) =>
          setNewVehicle({ ...newVehicle, fuelType: e.target.value })
        }
        equipments={getEquipmentsNames(equipments)}
        defaultChecked={newVehicle.equipments}
        onChangeEquipments={(e) => {
          setNewVehicle({ ...newVehicle, equipments: e.target.value });
        }}
      />
      <div class="fixed-bottom">

      <div className="row">
        <div className="col-md-12">
          <Pagination
        vehiclesPerPage={vehiclesPerPage}
        totalVehicles={vehicles.length}
        paginate={paginate}
        />
        </div>
        </div>
      </div>
    </div>
  );
};
