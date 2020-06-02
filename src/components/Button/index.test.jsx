import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('should show correct text', () => {
    const component = shallow(<Button>content</Button>);
    expect(component.text()).toBe('content');
  });

  it('should show correct content', () => {
    const content = <span>content</span>;
    const component = shallow(<Button>{content}</Button>);
    expect(component.contains(content)).toBe(true);
  });

  it('should call onClick callback on click event', () => {
    const clickHandler = jest.fn();
    const component = shallow(<Button onClick={clickHandler}>content</Button>);
    component.simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
});
