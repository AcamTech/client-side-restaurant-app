import PropTypes from 'prop-types';
import React from 'react';

export default function OrderButtons ({order, onEdit, onDeliver, onRestart, onCancel, onRejected}) {
  var buttons = null;
  if (order.state === 'QUEUED' || order.state === 'IN_PROCESS' || order.state === 'REJECTED') {
    buttons = (
      <div className="grid grid--narrow">
        <div className="grid__item medium--one-half">
          <button onClick={onEditHandler} className="button button-border button--block button--small">Editar</button>
        </div><div className="grid__item medium--one-half">
          <button onClick={onCancelHandler} className="button button-border button--block button--small">Anular</button>
        </div>
      </div>
    );
  }
  if (order.state === 'READY') {
    buttons = (
      <div className="grid grid--narrow">
        <div className="grid__item medium--one-half">
          <button onClick={onDeliverHandler} className="button button-border button--block button--small">Entregada</button>
        </div><div className="grid__item medium--one-half">
          <button onClick={onRejectedHandler} className="button button-border button--block button--small">Rechazada</button>
        </div>
      </div>
    );
  }
  if (order.state === 'CLIENT_REJECTED') {
    buttons = (
      <div className="grid grid--narrow">
        <div className="grid__item medium--one-half">
          <button onClick={onRestartHandler} className="button button-border button--block button--small">Reiniciar</button>
        </div><div className="grid__item medium--one-half">
          <button onClick={onCancelHandler} className="button button-border button--block button--small">Anular</button>
        </div>
      </div>
    );
  }
  return buttons;

  function onEditHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    onEdit(order.id);
  }

  function onCancelHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    onCancel(order);
  }

  function onDeliverHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    onDeliver(order);
  }

  function onRejectedHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    onRejected(order);
  }

  function onRestartHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    onRestart(order);
  }
}
