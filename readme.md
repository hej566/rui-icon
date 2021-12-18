### To use this package, I recommend to use svgr to handler svg first, then export svg as react component, otherwise just use svg as image

````
import Icon from '@hej566/icon';
import Svg from 'your path to svg resource';

<Icon>{Svg}</Icon> // svg is react component
<Icon src={Svg} alt="some text" /> // svg as image
````

You can customize your icon through props.
but if you use svg as image, color props will not work

````
<Icon width="2rem" height="2rem" color="red" motion="heartBeat 0.5s">{Svg}</Icon>
````
Available props includes:
````
{
    width: string,
    height: string,
    color: string,
    motion: string,
    className: string,
    src: string,
    alt: string,
    onClick: mouseEvent
}
````
for the motion props there are some predefined keyframes you can choose or just write your own keyframe by using some css-in-js library:
````
['rotate', 'bounce', 'fadeIn', 'fadeOut', 'pulse', 'rubberBand', 'shake', 'swing','tada','wobble','jello','heartBeat'] + cycleDuration
