import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Icon from '../component';
import Acorn1, { ReactComponent as Acorn2 } from '../assets/svg1/acorn-duotone.svg';

const propsForImgSvg = {
  height: '2rem',
  width: '2rem',
  color: 'blue',
  src: Acorn1,
  alt: 'svg1 image',
  motion: 'rubberBand 0.5s linear 2',
  className: 'test class',
  id: 'test id',
};

const propsForSvgObj = {
  height: '2rem',
  width: '2rem',
  color: 'blue',
  motion: 'rubberBand 0.5s linear 2',
  className: 'test class',
  svg: <Acorn2 />,
  id: 'test id',
};

it('IMG SVG render correctly', () => {
  const tree = renderer.create(<Icon src={Acorn1} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OBJ SVG render correctly', () => {
  const tree = renderer.create(<Icon svg={<Acorn2 />} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('IMG SVG render correctly with height, width, color, motion, classname', () => {
  const IconComponent = <Icon {...propsForImgSvg} />;
  const tree = renderer.create(IconComponent).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OBJ SVG render correctly with height, width, color, motion, classname', () => {
  const IconComponent = <Icon {...propsForSvgObj} />;
  const tree = renderer.create(IconComponent).toJSON();
  expect(tree).toMatchSnapshot();
});

it('IMG props with height, width, color and motion', () => {
  const IconComponent = <Icon {...propsForImgSvg} />;
  const testRender = renderer.create(IconComponent);
  const testInstance = testRender.root;
  expect(testInstance.props).toEqual({ ...propsForImgSvg });
});

it('IMG props with height, width, color and motion', () => {
  const IconComponent = <Icon {...propsForSvgObj} />;
  const testRender = renderer.create(IconComponent);
  const testInstance = testRender.root;
  expect(testInstance.props).toEqual({ ...propsForSvgObj });
});
