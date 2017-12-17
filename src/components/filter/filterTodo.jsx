import React from 'react'

const FilterTodo = ({ filterTodo, filterLabel }) => {

    const filterAction = (e) => {
        e.preventDefault()
        filterTodo()
    }

    return (
        <a href='' onClick={filterAction}>
            {filterLabel}
        </a>
    )
}

export default FilterTodo