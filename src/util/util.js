import { find, indexOf } from "lodash"
import { getEquipments } from "../services/equipments.service"

export const getEquipmentsNames = (equipments) => {
        return equipments.map(equipment => equipment.name)
}

export const getCardEquipmentsName = (equipments, equipmentMappings) => {
    if(equipments && equipments.length > 0){
        return equipments.map(equipmentId=>{
            if(find(equipmentMappings,{id:equipmentId})){
                return find(equipmentMappings,{id:equipmentId}).name
            }           
        })
    }
}

export const getEquipmentId = (equipment,equipmentMappings) => {
            return indexOf(equipmentMappings,equipment)+1;
            
        
}

export const getEquipmentName = (equipment,equipmentMappings) => {
    return find(equipmentMappings,{id:equipment}).name

}

export const setEquipmentsValues = (equipmentNames,equipmentMappings) => {
    let tempArray = [];
    equipmentNames.map(equipmentName => {
        if(typeof(equipmentName) !== 'string'){
            tempArray.push(equipmentName)
        }
        else{
            if(find(equipmentMappings,{name:equipmentName})){
                tempArray.push(find(equipmentMappings,{name:equipmentName}).id)
            }
        }
    })
    return tempArray;
        // return equipmentNames.map(equipmentName => {
        //     if(find(equipmentMappings,{name:equipmentName})){
        //         return find(equipmentMappings,{name:equipmentName}).id
        //     }         
        // })
    }
    
export const getSelectedEqsName = (index,equipmentsArr) => {
    getEquipments().then((equipments) => {
        let eqName =  find(equipments, {id:index}).name;
        if(equipmentsArr.includes(eqName)){
            return true;
        };
        return false;
    })
}

export const findEquipmentName = (id,equipments) => {
    return equipments[id-1];
}

export const setDefaultEquipments = (eq, equipments) => {
    if(eq && eq.length >0){
        return eq.map((element) => {
            return findEquipmentName(element,equipments);
        })
    }
}