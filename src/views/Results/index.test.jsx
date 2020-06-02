import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import ResultsView from './index';
import rootReducer from '../../reducers';
import { postAnswers } from './data';
import ProductInfo from '../../components/ProductInfo';

const mockResponse = { name: 'cloudx', image: 'cloudx.png' };
jest.mock('./data');
postAnswers.mockReturnValue(mockResponse);

describe('Results View', () => {
  let component;
  beforeEach(() => {
    const store = createStore(rootReducer);
    component = mount(
      <Provider store={store}>
        <ResultsView />
      </Provider>
    );
  });

  it('should check for results', () => {
    expect(postAnswers).toHaveBeenCalledTimes(1);
  });

  it('should show correct results', () => {
    component.update();
    const productInfo = component.find(ProductInfo);

    expect(productInfo.prop('name')).toBe('cloudx');
    expect(productInfo.prop('imageUrl')).toBe('cloudx.png');
  });
});
