import React from 'react'

const SortTodo = ({ sortTodo, label }) => {

    const sortAction = (e) => {
        e.preventDefault()
        sortTodo()
    }

    return (
        <a href='' onClick={sortAction} id='sort_link'>
            <label>
                {label}
            </label>
        </a>
    )
}

export default SortTodo