import * as React from 'react';
import Icon from '../../dist';
// @ts-ignore
import Acorn from '../assets/svg/acorn-duotone.svg';

function App() {
  return (
    <div className="icon">
      <Icon width="2rem" height="2rem" color="red" motion="rubberBand 0.5s">
        {Acorn}
      </Icon>
      <Icon width="2rem" height="2rem" color="blue" motion="rubberBand 0.5s">
        {Acorn}
      </Icon>
    </div>
  );
}

export default App;
