import TodoList from '../../src/components/todo/todoList'
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

describe('>>> TodoList', () => {
    it('+++ render description', () => {
        const list = [{
            _id: 1,
            date: Date.now(),
            done: false,
            description: 'Criar um componente de teste'
        }]

        const wrapper = mount(
            <TodoList
                list={list}
            />
        );

        const td = wrapper.find('.description')

        expect(td.text()).toBe('Criar um componente de teste')
    })
})
