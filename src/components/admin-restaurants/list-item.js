import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export default function ListItem ({id, restaurant}) {
  return (
    <li className="item-list__item">
      <article className="media media--small clearfix">
        <Link to={`admin/restaurante/${id}`}>
          <div className="media__img">
            <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
          </div>
          <div className="media__body">
            <h1 className="item-list__title">{restaurant.name}</h1>
            <p className="item-list__text">
              {restaurant.address}<br />
              {restaurant.phone}<br />
              <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string
  }).isRequired
};
