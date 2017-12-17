import React from 'react'

import TodoContainer from '../containers/todos/todoContainer'
import ToastrMessage from './toastrMessages'

import 'modules/moment/locale/pt-br'
import '../static/css/style.sass'

export default props => (
    <div>
        <TodoContainer />
        <ToastrMessage />
    </div>
)