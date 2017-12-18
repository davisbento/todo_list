import React from 'react'
import moment from 'moment'

const TodoList = ({ list, deleteTodo, markAsDone, markAsPending }) => {

    const renderRows = () => {
        return list.map((todo, index) => {
            return <tr key={todo._id}>
                <td className='description'>{todo.description}</td>
                <td>{moment(todo.date).format('LLL')}</td>
                <td>
                    {todo.done ?
                        <button className='todo-done' onClick={() => markAsPending(todo._id)}>
                            <i className='fa fa-check'></i>
                        </button>
                        : <button className='todo-not-done' onClick={() => markAsDone(todo._id)}>
                            <i className='fa fa-remove'></i>
                        </button>}
                </td>
                <td>
                    <button className='button-delete' onClick={() => deleteTodo(todo._id)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </td>
            </tr>
        })
    }
    return (
        <div className='panel-primary text-center'>
            {list.length > 0 ? <table className='table-list'>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Data</th>
                        <th>Completo</th>
                        <th>Deletar tarefa</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table> 
            : <p className='empty-list'>Nenhuma tarefa na sua lista</p>}


        </div>
    )
}

export default TodoList