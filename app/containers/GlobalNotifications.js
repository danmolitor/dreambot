import React from 'react';
import { connect } from 'react-redux';

// Note: This could be a pure functional component...
// I'm not sure whether it will need any lifecycle methods if/when
// we decide to improve it, so I'm not sure I should move it over to a functional
// component yet
const GlobalNotifications = React.createClass({
  propTypes: {
    styleMap: React.PropTypes.object.isRequired,
    notifications: React.PropTypes.object,
  },

  render() {
    const { notifications: { currentNotification }, styleMap } = this.props;
    return (
      <div style={{ position: 'fixed', width: '50%', left: '50%', zIndex: '9999' }}>
        { currentNotification && (
          <div className={`notification ${styleMap[currentNotification.style] || styleMap.info}`}>
            <button className="delete"></button>
              {currentNotification.message}
          </div>
        )}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(GlobalNotifications);
