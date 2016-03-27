import React from 'react';
import moment from 'moment';

const Selector = React.createClass({
  handleClick() {
    this.props.onSubmit({
      year: Number(this._year.value),
      month: Number(this._month.value),
      day: Number(this._day.value)
    });
  },

  render() {
    return (
      <div>
        <input type="input" placeholder="year" defaultValue={moment().year()} ref={ref => this._year = ref} />
        <input type="input" placeholder="month" defaultValue={moment().month() + 1} ref={ref => this._month = ref} />
        <input type="input" placeholder="day" defaultValue={moment().date()} ref={ref => this._day = ref} />
        <button type="submit" onClick={this.handleClick}>submit</button>
      </div>
    );
  }
});

export default Selector;
