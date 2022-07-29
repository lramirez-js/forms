import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState({ 
    title: 'Hi', 
    message: '',
    select: 'blue',
    checkbox: true,
    radio: 'circle'
  })
  const handleCange = ({target}) => {
    // Dynamic property:
    setValue(state => ({
      ...state, 
      [target.name]: (target.name === 'checkbox') 
        ? target.checked
        : target.value
    }))

    console.log(value)
  }

  return (
    <div>
      <span>{ value.title }</span>
      <input type="text" name="title" value={value.title} onChange={handleCange}/>
      <textarea name="message" value={value.message} onChange={handleCange}/>
      <select name="select" value={value.select} onChange={handleCange}>
        <option value="">Select an option</option>
        <option value="blue">Blue option</option>
        <option value="red">Red option</option>
        <option value="pink">Pink option</option>
      </select>
      <input type="checkbox" name="checkbox" checked={value.checkbox} onChange={handleCange} />
      <div>
        <input type="radio" name="radio" 
          value="square" 
          onChange={handleCange} 
          checked={value.radio === 'square'} 
        /> 
        Square
        <input type="radio" name="radio" 
          value="circle" 
          onChange={handleCange} 
          checked={value.radio === 'circle'} 
        /> 
        Circle
        <input type="radio" name="radio" 
          value="rectangle" 
          onChange={handleCange} 
          checked={value.radio === 'rectangle'} 
        /> 
        Rectangle
      </div>
    </div>
  )
}

export default App