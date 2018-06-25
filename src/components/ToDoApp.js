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
    if (this.state.options.length !== prevState.options.length) {
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
            deleteOptionHandler={this.deleteOptionHandler} />
        </div>
      </div>
    );
  }
}

