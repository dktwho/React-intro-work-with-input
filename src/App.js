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
      Текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац. <br />

      <input value={value} onChange={handleChange} /> 
      text 1: {value}
      <br />
       
      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      text 2: {value2}
      <br />

      <br />
      Выводится квадрат вводимого числа:
      <br />
      <input type='number' value={num} onChange={(e) => setNum(e.target.value)} /> 
      <p>{num ** 2}</p> 

    </div>
  );
}

export default App;
