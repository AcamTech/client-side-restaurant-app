import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

const ADMIN_ROLE = 'admin';
const WAITER_ROLE = 'waiter';

const RestaurantStaffList = createClass({
  displayName: 'admin-restaurant-staff-list',
  propTypes: {
    restaurantId: PropTypes.string,
    staff: PropTypes.array,
    addOrEditAdmin: PropTypes.func.isRequired
  },
  getDefaultProps(){
    return {
      waiters: []
    };
  },
  onAdminFormSubmit(e){
    e.preventDefault();
    var {addOrEditAdmin, restaurantId} = this.props;
    var admin = {
      uid: this.refs.uid.value,
      name: this.refs.name.value,
      email: this.refs.email.value,
      role: 'admin'
    };

    addOrEditAdmin(admin, restaurantId);
  },
  renderAdminForm(admin){
    return (
      <div className="panel">
        <div className="panel__head">
          <h3 className="panel__title">Admin</h3>
        </div>
        <form onSubmit={this.onAdminFormSubmit}>
          <div className="panel__body">
            <input type="hidden" ref="uid" defaultValue={admin.uid} />
            <div className="form-group">
              <label htmlFor="admin-name">Nombre del administrador</label>
              <input className="form-control" id="admin-name" type="text" placeholder="Nombre" ref="name" defaultValue={admin.name} />
            </div>
            <div className="form-group">
              <label htmlFor="admin-email">Correo del administrador</label>
              <input className="form-control" id="admin-email" type="email" placeholder="Email" ref="email" disabled={admin.email != undefined} defaultValue={admin.email} />
            </div>
          </div>
          <div className="panel__footer">
            <input className="button button--success button--block" type="submit" value="Guardar" />
          </div>
        </form>
      </div>
    );
  },
  render(){
    var waiters = this.props.waiters;
    var admin = this.props.admin;
    return(
      <section>
        {this.renderAdminForm(admin)}
        <div className="panel">
          <div className="panel__head">
            <h3 className="panel__title">Meseros</h3>
          </div>
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {renderRows(waiters, this.props.restaurantId, ['name', 'email'], null, null, 'uid')}
            </tbody>
          </table>
          </div>
        </div>
      </section>
    );
  }
});

export default RestaurantStaffList;
