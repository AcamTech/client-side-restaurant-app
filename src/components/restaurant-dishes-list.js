import React from 'react';

export default function RestaurantDishesList(){
  return(
    <div className="panel">
      <div className="table-responsive">
      <table className="table table--hover text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bisque Langosta con Salmón</td>
            <td>$19.900</td>
            <td>Fondo de langosta con fileticos de salmón, fósforos de plátano y cubos de aguacate.</td>
            <td>Entradas Calientes</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>Lomito de Res a las Tres Pimientas</td>
            <td>$35.900</td>
            <td>Glaceado con mantequilla, pimienta negra, rosada y verde.</td>
            <td>Carnes, Aves y Cerdo</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>Pargo Rojo Frito</td>
            <td>$45.900</td>
            <td>Acompañada con arroz con coco, patacones y ensalada caribe.</td>
            <td>Pescados y Mariscos</td>
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

RestaurantDishesList.displayName = 'Restaurant-dishes-list';