import React, {createClass, PropTypes} from 'react';
import {Link} from 'react-router';
import {keys, map, compose} from 'ramda';

export default createClass({
  displayName: 'admin-restaurant-list',
  propTypes: {
    restaurants: PropTypes.object,
    fetchRestaurants: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchRestaurants();
  },
  render(){
    var {restaurants} = this.props;
    return (
      <ul className="item-list list-unstyled">
        {mapRestaurantsFromObj(restaurants)(keys(restaurants))}
      </ul>
    );
  }
});

function mapRestaurantsFromObj(restaurants){
  return map(
      restaurant => (
        <li key={restaurant} className="item-list__item">
          <article className="media media--small clearfix">
            <Link to="admin/restaurant/123">
              <div className="media__img">
                <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
              </div>
              <div className="media__body">
                <h1 className="item-list__title">{restaurants[restaurant].name}</h1>
                <p className="item-list__text">Cra 51B # 84 - 56 <br />
                  <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                </p>
              </div>
            </Link>
          </article>
        </li>
      )
  );
}
