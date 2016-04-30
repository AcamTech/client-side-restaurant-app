import React, { PropTypes } from 'react';
import {keys, map, compose, addIndex} from 'ramda';

const indexedMap = addIndex(map);

export default function TableRow ({id, data, onClickRemoveHandler, onClickEditHandler}) {
  function renderCells(id){
    return compose(indexedMap((item, idx) => <td key={id + idx}>{data[item]}</td>), keys);
  }
  return (
    <tr>
      {renderCells(id)(data)}
      <td>
        <a className="no-decoration color-success" href="#" onClick={onClickEditHandler}><span className="icon-pencil"></span> Editar</a>
      </td>
      <td>
        <a className="no-decoration color-danger" href="#" onClick={onClickRemoveHandler}>
          <span className="icon-x"></span> Eliminar
        </a>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onClickRemoveHandler: PropTypes.func.isRequired,
  onClickEditHandler: PropTypes.func.isRequired
};
