import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router';

export default function SideNavigationItem ({pathname, text, icon, className}) {
  return (
    <div className={`side-navigation__item ${className}`}>
      <Link className="side-navigation__link" activeClassName="is-active" to={{pathname: pathname}}>
        <span className={`side-navigation__icon ${icon}`}></span>
        <span className="side-navigation__text">{text}</span>
      </Link>
    </div>
  );
}

SideNavigationItem.defaultProps = {
  icon: '',
  className: ''
};

SideNavigationItem.propTypes = {
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string
};
