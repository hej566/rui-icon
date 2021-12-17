import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
  display: inline-block;
`;

const IconWrapper = styled.i`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes bounce {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      transform: translate3d(0, -30px, 0);
    }

    70% {
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    to {
      opacity: 0.5;
    }
  }
  @keyframes pulse {
    from {
      transform: scale(1);
    }

    50% {
      transform: scale(0.8);
    }

    to {
      transform: scale(1.2);
    }
  }
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(0.8, 0.8, 1);
    }

    to {
      transform: scale3d(1.2, 1.2, 1);
    }
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }

  .shake {
    animation-name: shake;
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0);
    }

    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }

    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }

    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }

    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }

    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes jello {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }

    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  }
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }

    14% {
      transform: scale(1.3);
    }

    28% {
      transform: scale(1);
    }

    42% {
      transform: scale(1.3);
    }

    70% {
      transform: scale(1);
    }
  }
  animation: ${(props) => props.theme.motion} linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Img = styled.img`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
`;

const Icon: React.FunctionComponent<propTypes> = (props: propTypes) => {
  const { onClick, className, children, src, alt, ...style } = props;
  const iconClasses: string[] = [];
  const Svg = children || undefined;
  if (className) iconClasses.push(className);

  const so: { [key: string]: string } = { ...style };

  return (
    <DivWrapper role="figure" onClick={onClick} className={iconClasses.join(' ')}>
      <IconWrapper theme={so}>
        {src && !Svg && <Img src={src} alt={alt} />}
        {!src && Svg && <Svg fill={so.color} width={so.width} height={so.height} role="none" />}
      </IconWrapper>
    </DivWrapper>
  );
};

type propTypes = {
  children?: React.FunctionComponent<React.SVGProps<SVGElement>>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  color?: string;
  motion?: string;
};

Icon.defaultProps = {
  onClick: () => {},
  className: '',
  src: '',
  alt: '',
  width: '1rem',
  height: '1rem',
  color: 'currentColor',
  motion: '',
  children: undefined,
};

export default React.memo(Icon);
