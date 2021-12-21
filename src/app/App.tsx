import React from 'react';
import Icon from '../../dist';
// @ts-ignore
import Acorn1 from '../assets/svg1/acorn-duotone.svg';
// @ts-ignore
import Acorn2 from '../assets/svg2/acorn-duotone.svg';

function App() {
  return (
    <div className="icon">
      <Icon
        width="2rem"
        height="2rem"
        color="red"
        motion="rubberBand 0.5s linear 2"
        svg={<Acorn1 />}
      />
      <Icon
        width="2rem"
        height="2rem"
        color="red"
        motion="rubberBand 0.5s ease-in-out 10"
        svg={<Acorn1 />}
      />
      <Icon
        width="2rem"
        height="2rem"
        color="blue"
        motion="rubberBand 0.5s linear infinite"
        svg={<Acorn1 />}
      />
      <Icon
        width="2rem"
        height="2rem"
        color="blue"
        motion="rubberBand 0.5s linear infinite"
        src={Acorn2}
      />
    </div>
  );
}

export default App;
