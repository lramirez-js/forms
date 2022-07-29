import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState({ title: 'Hi', message: '' })
  const handleCange = (e) => {
    // Dynamic property:
    setValue(state => ({
      ...state, 
      [e.target.name]: e.target.value 
    }))

    console.log(value)
  }

  return (
    <div>
      <span>{ value.title }</span>
      <input type='text' name='title' value={value.title} onChange={handleCange}/>
      <textarea name='message' value={value.message} onChange={handleCange}/>
    </div>
  )
}

export default App