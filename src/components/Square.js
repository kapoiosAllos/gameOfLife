import React from 'react';

import './Square.css';

const square = (props) => {

  let rowclasses = ['square'];
  if (props.row) {
    rowclasses= ['square', 'row']
  }

  console.log(rowclasses);

  return (
      <div className={rowclasses.join(' ')}>

      </div>

  );
}

export default square;
