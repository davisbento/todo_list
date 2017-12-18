import TodoList from '../src/components/todo/todoList'
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

test('TodoList renders the description inside it', () => {
    const list = [{ _id: 1, date: Date.now(), done: false, description: 'Buy Milk' }];
    const deleteTodo = () => { console.log('delete todo') }
    const markAsDone = () => { console.log('mark todo as done') }
    const markAsPending = () => { console.log('mark todo as pending') }

    const wrapper = mount(
        <TodoList
            list={list} deleteTodo={deleteTodo}
            markAsDone={markAsDone} markAsPending={markAsPending}
        />
    );

    const td = wrapper.find('.description');

    expect(td.text()).toBe('Buy Milk');
});
