import React from 'react'
import { shallow, configure } from 'enzyme'
import SortTodo from '../src/components/filter/sortTodo'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

test('SortTodo label changes the text after click', () => {
    const sortTodo = () => { }

    const wrapper = shallow(<SortTodo label='Mostrar todos' sortTodo={sortTodo} />)

    const label = wrapper.find('label')

    expect(label.text()).toEqual('Mostrar todos')

    wrapper.find('a').simulate('click', { preventDefault() { } });

})