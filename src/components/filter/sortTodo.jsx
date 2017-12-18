import React from 'react'

const SortTodo = ({ sortTodo, label, list }) => {

    const sortAction = (e) => {
        e.preventDefault()
        sortTodo(list)
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