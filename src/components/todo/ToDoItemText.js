import React, {memo} from 'react'


const ToDoItemText = ({ important, todoText }) => {
    return (
        <>
            {
             important ? (
                 <span><i className='fa fa-exclamation-circle'></i></span>
                ): null
            }
            {todoText.slice(0, 60)}
        </>
    )
}

export default memo(ToDoItemText);