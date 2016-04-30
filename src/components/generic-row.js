import React, { PropTypes } from 'react';

export default function Row ({id, data, onClickRemoveHandler, onClickEditHandler}) {
  function renderCells(data){
    var {id} = data;
    delete data.id;
    var content = Object.keys(data).map(item => (
      <td key={id}>
        {data[item]}
      </td>
    ));
    return (
      content
    );
  }
  return (
    <tr>
      {renderCells(data)}
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

Row.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onClickRemoveHandler: PropTypes.func.isRequired,
  onClickEditHandler: PropTypes.func.isRequired
};
