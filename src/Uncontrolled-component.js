const App = () => {
  const submit = (ev) => {
    ev.preventDefault()
    // We get the Form Data
    const formData = new FormData(ev.target)
    // We transform the data into an array. Format: [key, value]
    const arrData = Array.from(formData)
    // We transform the array into an object (given the previous format).
    const data = Object.fromEntries(arrData)
    
    console.log(data)
  }

  return(
    <div>
      <form onSubmit={submit}>
        <span>Form:</span>
        <input name='field1' />
        <input name='field2' />
        <input type="submit" value='Send' />
      </form>
    </div>
  )
}

export default App