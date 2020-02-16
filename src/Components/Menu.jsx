import React from 'react';
const Menu = props => {
  return (
    <div className={props.showMenu ? 'menu hide' : 'menu'}>
      <small className="goBack" onClick={() => props.toggleMenu()}>
        {'◄ back to business'}
      </small>
      <h1>
     Welcome
      </h1>
    </div>
  );
};

export default Menu;
