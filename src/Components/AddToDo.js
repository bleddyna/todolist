import React, { useState } from 'react';


const AddToDo = (props) => {
    const [item, setItem] = useState("")

    const handleChange = (e) => {
        setItem(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.item(item)
        setItem('')
    }
    return (
        <div>
            <form method='post' onSubmit={handleSubmit}>
                <input type="text" id='something' name='item' value={item} onChange={handleChange} placeholder='add something' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default AddToDo