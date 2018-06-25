import React from 'react'

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  addOptionHandler = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOptionHandler(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form className="add-option" onSubmit={this.addOptionHandler}>
          <input type="text" className="add-option-input" name="option" />
          <button type="submit" className="add-option-btn"> + </button>
        </form>

        {this.state.error && <p className="add-option-error"> {this.state.error}</p>}
      </div>
    );
  }
}