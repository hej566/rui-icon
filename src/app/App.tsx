import React from 'react';
import Icon from '../../dist';
// @ts-ignore
import Acorn from '../assets/svg/acorn-duotone.svg';

function App() {
  return (
    <div className="icon">
      <Icon width="2rem" height="2rem" color="red" motion="rubberBand 0.5s linear 2">
        {Acorn}
      </Icon>
      <Icon width="2rem" height="2rem" color="red" motion="rubberBand 0.5s ease-in-out 10">
        {Acorn}
      </Icon>
      <Icon width="2rem" height="2rem" color="blue" motion="rubberBand 0.5s linear infinite">
        {Acorn}
      </Icon>
    </div>
  );
}

export default App;
