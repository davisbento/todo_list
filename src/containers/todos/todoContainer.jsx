import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    handleChange, addTodo, loadData,
    deleteTodo, markAsDone, markAsPending,
    showAll, showComplete, sortAsc, sortDesc
} from '../../actions/todoActions'

import TodoList from '../../components/todo/todoList'
import TodoForm from '../../components/todo/todoForm'
import FilterTodo from '../../components/filter/filterTodo'
import SortTodo from '../../components/filter/sortTodo'

class TodoContainer extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    keyHandler(e) {
        const { addTodo, todo } = this.props
        if (e.key === 'Enter') {
            addTodo(todo.description)
        }
    }

    handleAdd() {
        const { addTodo, todo } = this.props
        addTodo(todo.description)
    }

    componentWillMount() {
        const { loadData } = this.props
        loadData()
    }

    render() {
        const { handleChange, todo, deleteTodo,
            markAsDone, markAsPending,
            showComplete, showAll,
            sortAsc, sortDesc } = this.props
        return (
            <div className='container'>
                <h1 className='text-center'>Todo List APP</h1>
                <TodoForm
                    handleChange={handleChange}
                    handleAdd={this.handleAdd}
                    keyHandler={this.keyHandler}
                    description={todo.description} />

                <div className='text-center'>
                    <SortTodo label='Mais recentes' sortTodo={sortAsc} /> |
                    <SortTodo label='Mais antigas' sortTodo={sortDesc} />
                </div>

                <TodoList
                    list={todo.list}
                    deleteTodo={deleteTodo}
                    markAsDone={markAsDone}
                    markAsPending={markAsPending}
                />

                <div className='filter-link'>
                    Mostar:
                    <FilterTodo filterTodo={showAll} filterLabel='Todos' /> |
                    <FilterTodo filterTodo={showComplete} filterLabel='Completos' />
                </div>

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators
    ({ handleChange, addTodo, loadData, deleteTodo, markAsDone, markAsPending, 
        showAll, showComplete, sortAsc, sortDesc }, dispatch)
const mapStateToProps = state => ({ todo: state.todo })
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)