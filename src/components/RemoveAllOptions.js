import React from 'react';

const RemoveAllOptions = (props) => (
  <div>
    {<button className="remove-all-btn" onClick={props.deleteOptionsHandler}>Remove All</button>}
  </div>
);

export default RemoveAllOptions;