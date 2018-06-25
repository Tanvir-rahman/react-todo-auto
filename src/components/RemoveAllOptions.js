import React from 'react';

const RemoveAllOptions = (props) => (
  <div>
    {props.optionsLength ? < button className="remove-all-btn" onClick={props.deleteOptionsHandler}>Remove All</button> : false}
  </div >
);

export default RemoveAllOptions;