import { combineReducers } from 'redux'
import todoReducer from '../reducers/todoReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    todo: todoReducer,
    toastr: toastrReducer
})

export default rootReducer