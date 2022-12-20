

import React from 'react'
import { useState } from 'react'
const App2 = () => {

  const [value, setValue] = useState('')
  const [num, setNum] = useState(0)
  const [age, setAge] = useState(0)
  const [temperature, setTemperature] = useState(0)

  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)


  function square(num) {
    return num ** 2
  }

  function calcAge(num) {
    return 2022 - num
  }

  function convertGrad(num) {
    return (num - 32) / 1.8
  }


  return (
    <div className='App'>
      При вводе текста в инпут, в абзаце выводится количество введенных в инпут символов 
      <br />
      <input  value={value} onChange={(e) => setValue(e.target.value)} />
      <p>value: {value} </p>
      <p>value length:{value.length}</p>
      <br />
      <hr />

      Операции над стейтом прямо на выводе  <br />
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
      <p> {square(num)}</p>
      <br />
      <hr />

      В инпут вводится возраст пользователя в абзаце выводится год рождения пользователя <br />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>{calcAge(age)}</p>
      <br />
      <hr />

      В инпут вводятся градусы Фаренгейта, в абзаце выводится конвертация в градусы Цельсия <br />
      <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
      <p>in Farenheit: {temperature} ; in Celsius: {convertGrad(temperature).toFixed(2)} </p>
      <br />
      <br />
      <hr />
      Cумма двух инпутов <br />
      <input type="number" onChange={(e) => setValue3(+e.target.value)} /> Value3 <br />
      <input type="number" onChange={(e) => setValue4(+e.target.value)} /> Value4 <br />
      <p>sum of value 3 and value 4 - <b>{value3 + value4}</b></p>
     
      
    </div>
  )
}

export default App2
