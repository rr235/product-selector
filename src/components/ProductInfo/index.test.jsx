import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from './index';

describe('Product Info', () => {
  let component;
  beforeAll(() => {
    component = shallow(<ProductInfo title="product name" imageUrl="productImage.jpg" />);
  });

  it('should show correct title', () => {
    const title = component.find('h1');
    expect(title.text()).toBe('product name');
  });

  it('should show correct image', () => {
    const image = component.find('img.image');
    expect(image.prop('src')).toBe('productImage.jpg');
    expect(image.prop('alt')).toBe('product name');
  });
});
