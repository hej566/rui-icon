### To use this package, I recommend to use svgr to handler svg first, then export svg as react component

```
import Icon from '@hej566/icon';
import Svg from 'your path to svg resource';

<Icon>{Svg}</Icon>
```

You can customize your icon through props

```
<Icon width="2rem" height="2rem" color="red" motion="heartBeat 0.5s">{Svg}</Icon>
```
Available props includes:
```
{
    width: string,
    height: string,
    color: string,
    motion: string = one of ['rotate', 'bounce', 'fadeIn', 'fadeOut', 'pulse', 'rubberBand', 'shake', 'swing','tada','wobble','jello','heartBeat'] + cycleDuration
}
```