

import React from 'react'
import { useState } from 'react'

const App3 = () => {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)
  const [value5, setValue5] = useState(0)

  let arr = [value1, value2, value3, value4, value5]
  let arrlength = arr.length 



  return (
    <div className='App'>
      Cреднее арифметическое введенных чисел из 5 инпутов <br />
      <input type="number" value={value1} onChange={(e) => setValue1(Number(e.target.value))} /> <br />
      <input type="number" value={value2} onChange={(e) => setValue2(Number(e.target.value))} /> <br />
      <input type="number" value={value3} onChange={(e) => setValue3(Number(e.target.value))} /> <br />
      <input type="number" value={value4} onChange={(e) => setValue4(Number(e.target.value))} /> <br />
      <input type="number" value={value5} onChange={(e) => setValue5(Number(e.target.value))} /> <br />
      {arr.reduce((a,b) => a + b / arrlength, 0).toFixed(1)}
      
      
      
    </div>
  )
}

export default App3
