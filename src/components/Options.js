import React from 'react';
import Option from './Option';

const Options = (props) => (
  <ul className="item-lists">
    {
      props.options.map((option, index) => (
        <Option key={index}
          optionText={option}
          count={index + 1}
          deleteOptionHandler={props.deleteOptionHandler}
          updateOptionHandler={props.updateOptionHandler}
        />
      ))
    }
  </ul>
);

export default Options;