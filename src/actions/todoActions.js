import moment from 'moment'
import { toastr } from 'react-redux-toastr'

const loadLocalStorage = () => {
    const list = JSON.parse(localStorage.getItem('list')) || []

    return list
}

const addLocalStorage = (item) => {
    localStorage.setItem('list', JSON.stringify(item))
}


export const handleChange = (e) => {
    return {
        type: 'HANDLE_CHANGE',
        payload: e.target.value
    }
}

export const addTodo = (description) => {

    if (description !== '') {
        const loadData = loadLocalStorage()

        const todo = { _id: Date.now(), description, date: moment().format(), done: false }

        loadData.push(todo)

        addLocalStorage(loadData)

        return dispatch => {
            toastr.success('Sucesso!', 'Tarefa inserida com sucesso!')
            dispatch([
                {
                    type: 'ADD_TODO',
                    payload: loadData
                }, {
                    type: 'HANDLE_CHANGE',
                    payload: ''
                }
            ])
        }
    }

    return dispatch => {
        toastr.error('Erro', 'O campo tarefa não pode ser nulo!')
    }

}

export const deleteTodo = (todo_id) => {
    const loadData = loadLocalStorage()

    // retira do array o todo com o _id selecionado
    const todoFiltered = loadData.filter(e => e._id != todo_id)

    // adiciona o array filtrado no localstorage
    addLocalStorage(todoFiltered)

    return dispatch => {
        toastr.success('Sucesso!', 'Tarefa removida com sucesso!')
        dispatch({
            type: 'TODO_REMOVED',
            payload: todoFiltered
        })
    }
}

export const markAsDone = (todo_index) => {
    const loadData = loadLocalStorage()

    const todo = loadData[todo_index]

    loadData.splice(todo_index, 1)

    todo.done = true

    loadData.unshift(todo)

    addLocalStorage(loadData)

    return {
        type: 'MARK_AS_DONE',
        payload: loadData
    }
}

export const markAsPending = (todo_index) => {
    const loadData = loadLocalStorage()

    const todo = loadData[todo_index]

    loadData.splice(todo_index, 1)

    todo.done = false

    loadData.unshift(todo)

    addLocalStorage(loadData)

    return {
        type: 'MARK_AS_PENDING',
        payload: loadData
    }
}

export const loadData = () => {
    const loadData = loadLocalStorage()

    if (loadData.length > 0) {
        return {
            type: 'LOAD_FROM_LOCAL',
            payload: loadData
        }
    }
    return {
        type: 'LOAD_FROM_LOCAL',
        payload: []
    }
}

export const showAll = () => {
    const loadData = loadLocalStorage()

    return {
        type: 'SHOW_ALL',
        payload: loadData
    }
}

export const showComplete = () => {
    const loadData = loadLocalStorage()

    const todosDone = loadData.filter(e => e.done == true)

    return {
        type: 'SHOW_COMPLETE',
        payload: todosDone
    }
}

export const sortAsc = (list) => {
    const data = list

    function orderAsc(a, b) {
        if (a._id < b._id)
            return -1;
        if (a._id > b._id)
            return 1;
        return 0;
    }

    const todoSort = data.sort(orderAsc)

    return {
        type: 'ORDER_ASC',
        payload: todoSort
    }
}

export const sortDesc = (list) => {
    const data = list

    function orderDesc(a, b) {
        if (a._id > b._id)
            return -1;
        if (a._id < b._id)
            return 1;
        return 0;
    }

    const todoSort = data.sort(orderDesc)

    return {
        type: 'ORDER_DESC',
        payload: todoSort
    }
}