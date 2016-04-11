import React from 'react';

export default function RestaurantOrdersList(){
  return(
    <div className="panel">
      <div className="table-responsive">
      <table className="table table--hover text-center">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Mesa</th>
            <th>Mesero</th>
            <th>Valor</th>
            <th>Comentarios</th>
            <th>Calificación del servicio</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abril 24, 1992</td>
            <th>1</th>
            <th>Tony Banderas</th>
            <th>$19.000</th>
            <th>Ninguno</th>
            <th>5.0/5.0</th>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
            <td>
              <a className="no-decoration color-info" href="#"> Ver Platos</a>
            </td>
          </tr>
          <tr>
            <td>Octubre 18, 1951</td>
            <th>2</th>
            <th>Mike Jackson</th>
            <th>$45.000</th>
            <th>La comida estaba bien, pero demoró mucho en estar lista.  </th>
            <th>4.7/5.0</th>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
            <td>
              <a className="no-decoration color-info" href="#"> Ver Platos</a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="panel__footer">
        <div className="pager">
          <a className="pager__link" href=""><span className="icon-arrow-left icon-lg"></span></a>
          <a className="pager__link is-active" href="">1</a>
          <a className="pager__link" href="">2</a>
          <a className="pager__link" href="">3</a>
          <a className="pager__link" href="">4</a>
          <a className="pager__link" href="">5</a>
          <a className="pager__link" href="">6</a>
          <a className="pager__link" href=""><span className="icon-arrow-right icon-lg"></span></a>
        </div>
      </div>
    </div>
  );
}

RestaurantOrdersList.displayName = 'Restaurant-orders-list';