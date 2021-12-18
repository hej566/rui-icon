import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Icon from '../component';
import Acorn1, { ReactComponent as Acorn2 } from '../assets/svg/acorn-duotone.svg';

const propsForImgSvg = {
  height: '2rem',
  width: '2rem',
  color: 'blue',
  src: Acorn1,
  alt: 'svg image',
  motion: 'rotate 0.5s',
  className: 'test class',
};

const propsForSvgObj = {
  height: '2rem',
  width: '2rem',
  color: 'blue',
  motion: 'rotate 0.5s',
  className: 'test class',
};

it('IMG SVG render correctly', () => {
  const tree = renderer.create(<Icon src={Acorn1} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OBJ SVG render correctly', () => {
  const tree = renderer.create(<Icon>{Acorn2}</Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('IMG SVG render correctly with height, width, color, motion, classname', () => {
  const IconComponent = <Icon {...propsForImgSvg} />;
  const tree = renderer.create(IconComponent).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OBJ SVG render correctly with height, width, color, motion, classname', () => {
  const IconComponent = <Icon {...propsForSvgObj}>{Acorn2}</Icon>;
  const tree = renderer.create(IconComponent).toJSON();
  expect(tree).toMatchSnapshot();
});

it('IMG props with height, width, color and motion', () => {
  const IconComponent = <Icon {...propsForImgSvg} />;
  const testRender = renderer.create(IconComponent);
  const testInstance = testRender.root;
  expect(testInstance.props).toEqual({ ...propsForImgSvg });
});

it('IMG click event', () => {
  const clickHandler = jest.fn();
  const IconComponent = <Icon {...propsForImgSvg} onClick={clickHandler} />;
  render(IconComponent);
  const element = screen.getByRole('figure');
  fireEvent.click(element);
  expect(clickHandler.mock.calls.length).toEqual(1);
});

it('IMG props with height, width, color and motion', () => {
  const IconComponent = <Icon {...propsForSvgObj}>{Acorn2}</Icon>;
  const testRender = renderer.create(IconComponent);
  const testInstance = testRender.root;
  expect(testInstance.props).toEqual({ ...propsForSvgObj, children: Acorn2 });
});

test('IMG click event', () => {
  const clickHandler = jest.fn();
  const IconComponent = (
    <Icon {...propsForSvgObj} onClick={clickHandler}>
      {Acorn2}
    </Icon>
  );
  render(IconComponent);
  const element = screen.getByRole('figure');
  fireEvent.click(element);
  expect(clickHandler.mock.calls.length).toEqual(1);
});
