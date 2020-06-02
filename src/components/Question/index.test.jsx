import React from 'react';
import { shallow } from 'enzyme';
import Question from './index';

const optionsData = [
  { copy: 'option 1', id: 0 },
  { copy: 'option 2', id: 1 },
];
const onSelectionHandler = jest.fn();

describe('Question', () => {
  let component;
  beforeAll(() => {
    component = shallow(
      <Question question="question?" options={optionsData} onSelection={onSelectionHandler} />
    );
  });

  it('should show correct question', () => {
    const title = component.find('h1');
    expect(title.text()).toBe('question?');
  });

  it('should show correct number of options', () => {
    const options = component.find('.button');
    expect(options).toHaveLength(2);
  });

  it('should show correct options', () => {
    const options = component.find('.button');
    expect(options.at(0).children().text()).toBe('option 1');
    expect(options.at(1).children().text()).toBe('option 2');
  });

  it('should call onSelection callback on option click', () => {
    const options = component.find('.button');
    const optionAtIndex1 = options.at(1);
    optionAtIndex1.simulate('click');
    expect(onSelectionHandler).toHaveBeenCalledWith(optionsData[1]);
  });
});
