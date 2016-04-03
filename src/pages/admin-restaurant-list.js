import React, {createClass, PropTypes} from 'react';
import {Link} from 'react-router';

const AdminListResturants = createClass({
  displayName: 'Admin-restaurant-list',
  render(){
    return(
      <div>
        <h1 className="delta weight--light">Restaurantes</h1>
        <div className="panel">
          <ul className="item-list list-unstyled">
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Comidas</h1>
                    <p className="item-list__text">Cra 51B # 84 - 56 <br />
                      <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Comidas</h1>
                    <p className="item-list__text">Cra 51B # 84 - 56 <br />
                      <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <div className="item-list-unavailable text--smaller">No Disponible</div>
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Aguilas</h1>
                    <p className="item-list__text">Calle 82 # 47 - 01 <br />
                      <span className="text--smaller color-danger"><span className="icon-bullet"></span> No activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Comidas</h1>
                    <p className="item-list__text">Cra 51B # 84 - 56 <br />
                      <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Comidas</h1>
                    <p className="item-list__text">Cra 51B # 84 - 56 <br />
                      <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Comidas</h1>
                    <p className="item-list__text">Cra 51B # 84 - 56 <br />
                      <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
            <li className="item-list__item">
              <article className="media media--small clearfix">
                <Link to="admin/restaurant/123">
                  <div className="media__img">
                    <img className="item-list__img" src="images/camera-dummy.jpg" alt="Espacio Kids" height="78" width="110" />
                  </div>
                  <div className="media__body">
                    <h1 className="item-list__title">Restaurante Las Comidas</h1>
                    <p className="item-list__text">Cra 51B # 84 - 56 <br />
                      <span className="text--smaller color-success"><span className="icon-bullet"></span> Activo</span>
                    </p>
                  </div>
                </Link>
              </article>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default AdminListResturants;