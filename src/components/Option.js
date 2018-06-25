import React from 'react';

const Option = (props) => (
  <li className="item">
    <p>{props.count}. {props.optionText}</p>
    <button className="remove-btn" onClick={(e) => {props.deleteOptionHandler(props.optionText)}}>X</button>
  </li>
);

export default Option;