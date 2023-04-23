import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchTodo, selectSearch } from '../Redux/todos/todoSlice'

function Header() {
  const [search, setSearch] = useState()
  
  const dispacth = useDispatch(selectSearch)
  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    dispacth(searchTodo(search))
  }
  return (
    <header>
      <h1>NotesApp</h1>
      <input type='text'
        placeholder='Search...'
        onChange={(e) => handleChange(e)}
      />
    </header>
  )
}

export default Header
