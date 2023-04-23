import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/todos/todoSlice'
function Content() {
    const dispacth = useDispatch()
    const [title, setTitle] = useState()
    const [color, setColor] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispacth(addTodo({ title, color }))
        setTitle('')
        setColor('')
    }
    return (<form onSubmit={handleSubmit} >
        <textarea
            placeholder='Enter you are note here.....'
            value={title}

            onChange={(e) => setTitle(e.target.value)} />
        <div className='add-note'>

            <section>

                <div>
                    <input
                        type='radio'
                        name='radios'
                        checked
                        onChange={(e) => setColor(e.target.value)}
                        // 
                        value={"#f06292"}
                        id='pink' />
                    <label style={{ backgroundColor: "#f06292" }} htmlFor='pink'></label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='radios'
                        onChange={(e) => setColor(e.target.value)}
                        // 
                        value={"#ba68c8"} id='purple' />
                    <label style={{ backgroundColor: "#ba68c8" }}></label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='radios'
                        onChange={(e) => setColor(e.target.value)}
                        // 
                        value={"#ffd54f"} id='yellow' />
                    <label style={{ backgroundColor: "#ffd54f" }}></label>

                </div>
                <div>
                    <input
                        type='radio'
                        name='radios'
                        onChange={(e) => setColor(e.target.value)}
                        // 
                        value={"#aed581"} id='green' />
                    <label style={{ backgroundColor: "#aed581" }}></label>

                </div>
                <div>
                    <input
                        type='radio'
                        name='radios'
                        onChange={(e) => setColor(e.target.value)}
                        //
                        value={"#4fc3f7"} id='blue' />
                    <label style={{ backgroundColor: "#4fc3f7" }}></label>
                </div>


            </section>
            <button >Add</button>
        </div>
    </form >
    )
}

export default Content
