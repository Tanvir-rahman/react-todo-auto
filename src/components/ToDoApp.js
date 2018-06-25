import React from 'react';

import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import RemoveAllOptions from './RemoveAllOptions';

export default class ToDoApp extends React.Component {
  //States containing options of ToDoApp
  state = {
    options: []
  };

  //To delete all options
  deleteOptionsHandler = () => {
    this.setState(() => ({
      options: []
    }));
  };

  //To delete particular option
  deleteOptionHandler = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  //To Add Option
  addOptionHandler = (option) => {
    if (!option) {
      return 'Enter a valid Option';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'Similar Option already added';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  //To Update current option
  updateOptionHandler = (option, previousOption) => {
    const optionIndex = this.state.options.indexOf(option);
    const previousOptionIndex = this.state.options.indexOf(previousOption);

    if (!option) {
      return 'Enter a valid Option';
    }

    else if (optionIndex > -1) {
      return 'Similar Option already added';
    }


    const arr = [...this.state.options];
    arr[previousOptionIndex] = option;

    this.setState({ options: arr });
  }

  //For load item from localstorage in client side
  componentWillMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));

      if (options) {
        this.setState(() => ({ options }));
      }
    }

    catch (e) {
      console.log(e);
    }
  }

  //For update in localstorage with options list update
  componentDidUpdate(prevProps, prevState) {

    console.log('1');
    if (JSON.stringify(this.state.options.length) === JSON.stringify(prevState.options.length)) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddOption addOptionHandler={this.addOptionHandler} />
          <RemoveAllOptions
            deleteOptionsHandler={this.deleteOptionsHandler}
            optionsLength={this.state.options.length} />
          <Options
            options={this.state.options}
            deleteOptionHandler={this.deleteOptionHandler}
            updateOptionHandler={this.updateOptionHandler} />
        </div>
      </div>
    );
  }
}

