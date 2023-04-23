import React from 'react'
import { useSelector } from 'react-redux'
import { selectData, selectSearch } from '../Redux/todos/todoSlice'

function TodoList() {
  const todoData = useSelector(selectData)
  const filtered = useSelector(selectSearch)
  const filteredNote = todoData.filter((item) => item.title.toLowerCase().includes(filtered))
  return (
    <ul>
      {filteredNote.map((item) => <li key={item.id}>
        <div className='note-box' style={{ backgroundColor: item.color }}>
          <h1>{item.title}</h1>
        </div>
      </li>)}
    </ul>
  )
}

export default TodoList
