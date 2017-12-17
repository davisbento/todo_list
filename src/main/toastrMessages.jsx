import React from 'react'
import ReduxToastr from 'react-redux-toastr'

export default props => (
    <ReduxToastr
        timeOut={4000}
        newestOnTop={true}
        preventDuplicates={false}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
)