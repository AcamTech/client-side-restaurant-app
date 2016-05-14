import * as actionTypes from 'constants/action-types';

export function receiveEntities(entities) {
    return {
       type: actionTypes.RECEIVE_ENTITIES,
       payload: entities
    };
}

export function removeEntity(id, entity){
    return {
        type: actionTypes.REMOVE_ENTITY,
        payload: id,
        entity
    };
}