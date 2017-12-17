const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return { ...state, description: action.payload }
        case 'ADD_TODO':
            return { ...state, list: action.payload }
        case 'TODO_REMOVED':
            return { ...state, list: action.payload }
        case 'MARK_AS_DONE':
            return { ...state, list: action.payload }
        case 'MARK_AS_PENDING':
            return { ...state, list: action.payload }
        case 'SHOW_ALL':
            return { ...state, list: action.payload }
        case 'SHOW_COMPLETE':
            return { ...state, list: action.payload }
        case 'ORDER_ASC':
            return { ...state, list: action.payload }
        case 'ORDER_DESC':
            return { ...state, list: action.payload }
        case 'LOAD_FROM_LOCAL':
            return { ...state, list: action.payload }
        default:
            return state
    }
}