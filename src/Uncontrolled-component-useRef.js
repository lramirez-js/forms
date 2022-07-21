import { useRef } from 'react'

const App = () => {
  // useRef for every field
  const field1 = useRef()
  const field2 = useRef()
  const file = useRef()

  const submit = () => {
    console.log(field1)
    console.log(file)

    const form = new FormData()
    
    // File does not call to "value"
    form.append('myField1', field1.current.value)
    form.append('myField2', field2.current.value)
    form.append('myFile', file.current.files[0])

    console.log(form)

    // We send the data
    fetch('/endpoint/doesnotexist', {
      method: 'POST',
      body: form
    })

  }

  return(
    <div>
      <span>Form:</span>
      <input ref={field1} name='myField1' />
      <input ref={field2} name='myField2' />
      <input ref={file} type="file" name='myFile' />
      <input type="submit" value='Send' onClick={submit}/>
    </div>
  )
}

export default App