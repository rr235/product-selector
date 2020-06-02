import React from 'react';
import { mount } from 'enzyme';
import StartView from './index';

const redirectUrl = '/redirectUrl';
const history = { push: jest.fn() };

describe('Start View', () => {
  let component;

  beforeAll(() => {
    component = mount(<StartView history={history} redirectUrl={redirectUrl} />);
  });

  it('should show redirect button', () => {
    const button = component.find('button');
    expect(button).toHaveLength(1);
  });

  it('should show redirect to next page ', () => {
    const button = component.find('button');
    button.prop('onClick')();
    expect(history.push).toHaveBeenCalledWith(redirectUrl);
  });
});
