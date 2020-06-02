import React from 'react';
import { shallow } from 'enzyme';
import loadingGif from './assets/loader.gif';
import Loading from './index';

describe('Loading', () => {
  let component;
  beforeAll(() => {
    component = shallow(<Loading message="saving data" />);
  });

  it('should show correct message', () => {
    const message = component.find('p.message');
    expect(message.text()).toBe('saving data');
  });

  it('should show correct loading icon', () => {
    const image = component.find('img.image');
    expect(image.prop('src')).toBe(loadingGif);
    expect(image.prop('alt')).toBe('loading...');
  });
});
