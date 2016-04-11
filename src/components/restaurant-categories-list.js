import React from 'react';

export default function RestaurantCategoriesList(){
  return(
    <div className="panel">
      <div className="table-responsive">
      <table className="table table--hover text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entradas Calientes</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>Entradas Frías</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>Carnes, Aves y Cerdo</td>
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

RestaurantCategoriesList.displayName = 'Restaurant-categories-list';