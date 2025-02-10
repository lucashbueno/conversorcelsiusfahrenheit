import { useState } from 'react';
import './App.css'

function App() {
  const [celsiusInput, setCelsiusInput] = useState(1);
  const [fahrenheitInput, setFahrenheitInput] = useState((((1 * 9/5) +32).toFixed(2)));

  const handleCelsiusInputChange = (event) => {
    const celsiusValue = Number(event.target.value);
    setCelsiusInput(celsiusValue);
    setFahrenheitInput(((celsiusValue*(9/5))+32).toFixed(2));

  }
  return(
    <div className='container'>
        <div className='box'>
        <div>
    <label htmlFor='celsius'> Temperatura em Celsius: </label>
    <input type='number' name='celsius-input' className='input' value={celsiusInput} onChange ={handleCelsiusInputChange} step='0.1'/>
    </div>
        <div>
    <label htmlFor='fahrenheit'> Temperatura em Fahrenheit: </label>
    <input type='number' name='fahreinheit-input' className = 'input' value={fahrenheitInput} readOnly/>
    </div>
      </div>
    </div>
  )
}

export default App;