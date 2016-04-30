import React, { PropTypes } from 'react';

export default function TableRow ({id, data, onClickRemoveHandler, onClickEditHandler}) {
  function renderCells(id, data){
    var content = Object.keys(data).map((item, idx) => {
      return (
        <td key={id + idx}>
          {data[item]}
        </td>
      );
    });
    return (
      content
    );
  }
  return (
    <tr>
      {renderCells(id, data)}
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
