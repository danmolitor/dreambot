// Duration in seconds that a notification will last
const DURATION = 3;

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (message, style) => (
  { type: ADD_NOTIFICATION, notification: { message, style } }
);

export const NEXT_NOTIFICATION = 'NEXT_NOTIFICATION';
export const nextNotification = () => ({ type: NEXT_NOTIFICATION });

const tick = () => (dispatch, getState) => {
  dispatch(nextNotification());
  window.setTimeout(() => {
    if (getState().notifications.currentNotification) {
      dispatch(tick());
    }
  }, DURATION * 1000);
};

export const notify = (message, style) => (dispatch, getState) => {
  dispatch(addNotification(message, style));
  if (!getState().notifications.currentNotification) {
    dispatch(tick());
  }
};

