// jest syntax

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "link")).toEqual(output);
  
      expect(filterByTerm(input, "LINK")).toEqual(output);
    });
  });

  // enzyme syntax

  import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Foo from './Foo';

describe('<Foo />', () => {
  it('renders three `.foo-bar`s', () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);
  });

  it('renders the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain('unique');
  });
});

    // src/App.test.js
    
    describe('App component', () => {

        it('decrements count by 1 when the decrement button is clicked', () => {
          const wrapper = shallow(<App />);
          const decrementBtn = wrapper.find('button.decrement');
          decrementBtn.simulate('click');
          const text = wrapper.find('p').text();
          expect(text).toEqual('Count: -1');
        });
      });

      // mock complex components
      
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./MyComponent', () => () => (<div>Hello World</div>));

test('renders', () => {
  const { container } = render(<App/>);
  expect(container.textContent)
    .toMatch('Hello World');
});

/*
If your mock is more complex, you might decide to use a manual mock. 
To do so, make a new directory called ‘__mocks__’ next to the component you want to mock. 
Remove the factory argument from your call to jest.mock, and jest will automatically locate 
manual mocks and use them in your test.
*/ 
import React from 'react';

const MyMockComponent = () => (<div>Hello World</div>);

export default MyMockComponent;

// advanced mocks

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MyComponent from './MyComponent';

const MockMyComponent = () => {
  React.useEffect(() => {
    console.log('using an effect');
  });
  return (<div>Hello World</div>);
};
jest.mock('./MyComponent', () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn()
}));

beforeAll(() => {
  MyComponent.mockImplementation(MockMyComponent);
});

test('renders', () => {
  const { container } = render(<App/>);
  expect(container.textContent)
    .toMatch('Hello World');
});