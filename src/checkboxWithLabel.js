/** @jsx React.DOM */
(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-stylesheet', 'exports'], function(React, exports) {
      root.CheckboxWithLabel = factory(root, exports, React);
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(root, exports, require('react'));
  } else {
    root.CheckboxWithLabel = factory(root, {}, root.React, roo);
  }

}(this, function(root, CheckboxWithLabel, React) {

  CheckboxWithLabel = React.createClass({

    getInitialState: function() {
      return { isChecked: false };
    },

    onChange: function() {
      this.setState({isChecked: !this.state.isChecked});
    },

    render: function() {
      return (
        <label className="checkbox-with-label">
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        </label>
      );
    }
  });

  return CheckboxWithLabel;
}));
