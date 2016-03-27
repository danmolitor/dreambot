import React from 'react';
const SearchBox = React.createClass({
  handleKeyPress(e) {
    if (e.which === 13) {
      this.props.handleKeyPress(this._input.value);
    }
  },
  handleChange() {
    if (!this._input.value.length) this.props.disableFilter();
  },
  render() {
    return (
      <input ref= { (c) => { this._input = c; } }
        type="text"
        // onChange={this.props.detectChange}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        // onKeyDown={this.onEnter}
        className="input is-text-centered"
        placeholder="Ask Dream Bot Anything"
      />
      );
  }
});
export default SearchBox;