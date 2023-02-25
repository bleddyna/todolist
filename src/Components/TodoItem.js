import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='items'>
            <input type="checkbox" onChange={() => props.completed(props.id)} />
            <p>{props.item}</p>
        </div>
    )
}

export default TodoItem