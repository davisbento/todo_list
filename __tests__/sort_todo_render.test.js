import React from 'react'
import { shallow, configure } from 'enzyme'
import SortTodo from '../src/components/filter/sortTodo'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

test('SortTodo label text', () => {
    const wrapper = shallow(<SortTodo label='Mostrar todos' />)

    const label = wrapper.find('label')

    expect(label.text()).toEqual('Mostrar todos')

})