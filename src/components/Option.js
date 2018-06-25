import React from 'react';

class Option extends React.Component {
  state = {
    isInEditMode: false
  }

  viewHandler = () => {
    this.setState(() => ({
      isInEditMode: !this.state.isInEditMode
    }));
  };

  updateOptionHandler = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.updateOptionHandler(option);
    this.viewHandler();
  };

  renderEditView = () => {
    return (
      <form onSubmit={this.updateOptionHandler}>
        <input type="text"
          name="option"
          defaultValue={this.props.optionText}
        />
        <button className="btn-update" type="submit"> Update </button>
        <button className="btn-cancel" onClick={this.viewHandler}> Cancel </button>
      </form>);
  };

  renderNormalView = () => {
    return (
      <div>
        <p onClick={this.viewHandler}>
          {this.props.count}. {this.props.optionText}
        </p>
        <button className="remove-btn" onClick={(e) => { this.props.deleteOptionHandler(this.props.optionText) }}>X</button>
      </div>);
  }
  render() {
    return (
      <li className="item">

        {this.state.isInEditMode ?
          this.renderEditView() :
          this.renderNormalView()
        }
      </li>
    );
  }
};

export default Option;