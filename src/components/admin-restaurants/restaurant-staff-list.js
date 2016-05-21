import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

const ADMIN_ROLE = 'admin';
const WAITER_ROLE = 'waiter';

const RestaurantStaffList = createClass({
  displayName: 'admin-restaurant-staff-list',
  propTypes: {
    fetchStaff: PropTypes.func.isRequired,
    restaurantId: PropTypes.string,
    staff: PropTypes.array,
    addOrEditAdmin: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchStaff(this.props.restaurantId);
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
      <form onSubmit={this.onAdminFormSubmit}>
        <input type="hidden" ref="uid" defaultValue={admin.uid} />
        <input type="text" placeholder="Nombre" ref="name" defaultValue={admin.name} />
        <input type="email" placeholder="Email" ref="email" defaultValue={admin.email} />
        <input type="submit" value="Guardar" />
      </form>
    );
  },
  render(){
    var staff = this.props.staff;

    var waiters = staff
      .filter((member) => (member.role === WAITER_ROLE));

    var admin = staff
      .find((member) => (member.role === ADMIN_ROLE));

    return(
      <div className="panel">
        <h3>Admin</h3>
        {admin ? this.renderAdminForm(admin) : null}
        <h3>Meseros</h3>
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
    );
  }
});

export default RestaurantStaffList;
