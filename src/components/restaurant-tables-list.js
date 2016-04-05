import React from 'react';

export default function RestaurantTablesList(){
  return(
    <div className="panel">
      <div className="table-responsive">
      <table className="table table--hover text-center">
        <thead>
          <tr>
            <th>Número</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
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

RestaurantTablesList.displayName = 'Restaurant-tables-list';