import React from 'react';
import Row from './row';
import {keys, map, compose, pick} from 'ramda';

export default function renderRows(objectsArray, restaurantId='', whiteListKeys=[], removeFn, editFn, idAttribute='id'){
  return map(item => {
    var id = item[idAttribute];
    var oldItem = {...item};
    var whiteListed = pick(whiteListKeys, item);
    return (
      <Row
        key={id}
        id={id}
        data={whiteListed}
        onClickRemoveHandler={commandsFactory(removeFn, oldItem, restaurantId)}
        onClickEditHandler={commandsFactory(editFn, oldItem, restaurantId)} />
    );
  }, objectsArray);
}

function commandsFactory(fn, item, restaurantId){
  return function commandsFactoryThunk(){
    return fn(item, restaurantId);
  };
}
