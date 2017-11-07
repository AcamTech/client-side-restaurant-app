import PropTypes from 'prop-types';
import React from 'react';
import LoggerComponent from './logger-component';

export default function Logger(props) {
  return (
    props.isOpen ? <LoggerComponent {...props} /> : null
  );
}

Logger.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
