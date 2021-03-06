import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />)
  });

 it('will show 19 buttons', () => {
    const _Panel = shallow(<Panel/>)
    const buttons = _Panel.find('Button')
    expect(buttons).toHaveLength(19)
  });
 	it('has a div with a className "component-panel"', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.component-panel')).toHaveLength(1);
  });
});
