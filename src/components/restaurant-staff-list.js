import React from 'react';

export default function RestaurantStaffList(){
  return(
    <div className="panel">
      <div className="table-responsive">
      <table className="table table--hover text-center">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Rol</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>joão.silva@gmail.com</td>
            <td>Admin</td>
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

RestaurantStaffList.displayName = 'Restaurant-staff-list';