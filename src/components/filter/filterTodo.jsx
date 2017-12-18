import React from 'react'

const FilterTodo = ({ filterTodo, filterLabel }) => {

    const filterAction = (e) => {
        e.preventDefault()
        filterTodo()
    }

    return (
        <a href='' onClick={filterAction} id='filter_link'>
            <label>
                {filterLabel}
            </label>
        </a>
    )
}

export default FilterTodo