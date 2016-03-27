import React from 'react';
import {Link} from 'react-router';

const LeftPanel = ({ printMessage }) => {
  return (
    <nav className="menu">
      <p className="menu-heading is-primary is-fullwidth">
      GUEST
      </p>
      <div className="menu-block">
        <Link to="/" className="button is-fullwidth">
          Dashboard
        </Link>
      </div>
      <div className="menu-block">
      <button onClick={ printMessage } className="button is-fullwidth">
        Messages</button>
      </div>
      <div className="menu-block">
      <Link to="/questions" className="button is-fullwidth">
        Questions</Link>
      </div>
      <div className="menu-block">
      <button className="button is-fullwidth">
        Settings</button>
      </div>
      <div className="menu-block">
      <button className="button is-fullwidth">
        Logout</button>
      </div>
    </nav>
    )
}

export default LeftPanel;
