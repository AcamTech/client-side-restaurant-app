import PropTypes from 'prop-types';
import React from 'react';
import { LogoArea } from 'components/logo-area';
import { Popover } from 'components/popover';
import { UserDisplay } from 'components/user-display';
import { Link } from 'react-router';

var roleMapings = {
  'waiter': 'Mesero',
  'admin': 'Administrador',
  'kitchen': 'Cocina',
  'super': 'Super'
};

export default function Header({restaurant, user, className}) {
  return (
    <header className={`main-header ${className}`}>
      <div className="grid grid--narrow grid--middle">
        <div className="grid__item small--one-half">
          <LogoArea restaurantName={restaurant.name} address={restaurant.address} city={restaurant.city} />
        </div>
        <div className="grid__item small--one-half">
          <Popover className="user-display-popover">
            <UserDisplay name={user.name} avatar={user.avatar} role={roleMapings[user.role]} />
            <ul className="popover-menu popover-menu--default user-display-menu">
              <li className="popover-menu__item">
                <Link className="popover-menu__link" to="/logout" href="#">Salir</Link>
              </li>
            </ul>
          </Popover>
        </div>
      </div>
    </header>
  );
}

Header.displayName = 'Header';

Header.defaultProps = {
  className: ''
};

Header.propTypes = {
  restaurant: PropTypes.object,
  user: PropTypes.object,
  className: PropTypes.string
};
