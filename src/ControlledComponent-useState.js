import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('')
  const handleCange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <span>{ value }</span>
      <input value={value} onChange={handleCange}/>
    </div>
  )
}

export default App