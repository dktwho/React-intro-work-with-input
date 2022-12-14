import './App.css';
import { useState} from 'react'

function App() {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  const [num, setNum] = useState(0)

  function handleChange(e) {
   setValue(e.target.value)
  }

  return (
    <div className="App">
      <input value={value} onChange={handleChange} /> 
      {value}
      <br />
       
      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      {value2}
      <br />

      <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
      <p>{num ** 2}</p>

    </div>
  );
}

export default App;
