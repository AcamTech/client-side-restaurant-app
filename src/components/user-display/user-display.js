import React, {createClass, PropTypes} from 'react';

function UserDisplay ({avatar, name, role}) {
  return (
    <div className="user-display">
      <div className="media media--small">
        <div className="media__img">
          <div className="user-display__avatar">
            <img src={avatar} />
          </div>
        </div>
        <div className="media__body">
          <p className="user-display__text">
            {`${name}`} <br/>
            {`${role}`}
          </p>
        </div>
      </div>
      {/*<span className="push-half--left text-small user-display__icon icon-caret-down"></span>*/}
    </div>
  );
}

UserDisplay.displayName = 'User-display';

UserDisplay.defaultProps = {
  avatar: 'http://placehold.it/32x32'
};

UserDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  role: PropTypes.string
};

export default UserDisplay;
