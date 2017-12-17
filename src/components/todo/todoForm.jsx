import React from 'react'

const TodoForm = ({ handleChange, handleAdd, description, keyHandler }) => {
    return (
        <div className='form-add'>
            <h2>ADICIONAR TAREFA</h2>
            <input type='text'
                className='input-primary'
                onChange={handleChange}
                onKeyUp={keyHandler}
                placeholder='Tarefa'
                value={description}
            />
            <button type='submit' className='button-success' onClick={handleAdd}>
                Adicionar <i className='fa fa-plus'></i>
            </button>
        </div>
    )
}

export default TodoForm