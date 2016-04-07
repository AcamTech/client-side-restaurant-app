import React from 'react';


export default function FilterHeader({children, title}){
  return(
    <div className="grid grid--middle push--bottom">
      <div className="grid__item medium--one-eighth">
        <h1 className="delta flush weight--light">{title}</h1>
      </div><div className="grid__item medium--seven-eighths">
        <div className="grid">
          <div className="grid__item medium--one-quarter">
            <form action="" className="form-inline">
              <div className="form-group has-feedback has-feedback--reverse">
                <input className="form-control form-control-material input--small" placeholder="Buscar Plato" type="text" />
                <span className="form-control-feedback icon-search icon-lg"></span>
              </div>
            </form>
          </div><div className="grid__item medium--three-quarters text--end">
            <div className="grid">
                <div className="grid__item medium--one-quarter">
                    {children}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}