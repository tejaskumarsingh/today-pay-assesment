import React, { useState } from 'react'
import './styles.css';
const Calcu = () => {
  const [isExponent, setIsExponent] = useState(false);
  const [base,setBase]=useState('');
  const [data,setData]=useState("");
  const [memory,setMemory]=useState(0);
  const getValue=(event)=>{
    console.log(event.target.value);
    setData(data.concat(event.target.value))
  }
  const calculation = () => {
    try {
      if(data===''){
        setData('');
      }
      else{
      let result;
        if(isExponent){
        const exponent=parseFloat(data);
        result=Math.pow(parseFloat(base),exponent);
        }
        else{
          result=eval(data);
        }
      setData(result.toString());
      setIsExponent(false);
      setBase('');
    }
    } catch (error) {
      setData('');
      console.error("Error during calculation:", error);
    }
  };
  const memoryClear=()=>{
    setMemory(0);
  };
  const memoryRecall=()=>{
    setMemory(data.concat(memory.toString()));
  };
  const memoryAdd=()=>{
    const result=eval(data);
    if(!isFinite(result)){
      return;
    }
    setMemory(memory+result);
  };
  const memorySubstract=()=>{
    const result=eval(data);
    if(!isFinite(result)){
      return;
    }
    setMemory(memory-result);
  };
  const clear=()=>{
    setData("")
  }
  const calculateSquare = () => {
    try {
      if (data.trim() === '') return;
      const value = eval(data);
      const result = value ** 2;

      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  const calccube = () => {
    if(data.trim()!==''){
    setBase(data);
    setData('');
    setIsExponent(true);
    }
  };
  const calculateExponential = () => {
    try {
      if (data.trim() === '') return;
      const value = parseFloat(data);
      const result = Math.exp(value);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  const calculateReciprocal = () => {
    try {
      if (data.trim() === '') return;
      const value = parseFloat(data);
      if (value === 0) {
        setData('Infinity');
      } else {
        const result = 1 / value;
        setData(result.toString());
      }
    } catch (error) {
      setData('');
    }
  };
  const calculatePowerOfTen = () => {
    try {
      const value = parseFloat(data);
      const result = Math.pow(10, value);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  const calculateSquareRoot = () => {
    try {
      if (data.trim() === '') return;
      const value = parseFloat(data);
      if (value < 0) {
        setData('Error');
      } else {
        const result = Math.sqrt(value);
        setData(result.toString());
      }
    } catch (error) {
      setData('');
    }
  };
  const calculateCubeRoot = () => {
    try {
      if (data.trim() === '') return;
      const value = parseFloat(data);
      const result = Math.cbrt(value);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  const calculateYthRoot = () => {
    try {
      if (data.trim() === '') return;
      const [exponent, base] = data.split('^').map(parseFloat);
      if (exponent <= 0 || isNaN(base)) {
        setData('Error');
      } else {
        const result = Math.pow(base, 1 / exponent);
        setData(result.toString());
      }
    } catch (error) {
      setData('');
    }
  };
  const calculateNaturalLog = () => {
    try {
      if (data.trim() === '') return;
      const value = parseFloat(data);
      if (isNaN(value) || value <= 0) {
        setData('Error');
      } else {
        const result = Math.log(value);
        setData(result.toString());
      }
    } catch (error) {
      setData('');
    }
  };
  const calculateLogBase10 = () => {
    try {
      if (data.trim() === '') return;
      const value = parseFloat(data);
      if (isNaN(value) || value <= 0) {
        setData('Error');
      } else {
        const result = Math.log10(value);
        setData(result.toString());
      }
    } catch (error) {
      setData('');
    }
  };
  const calculateFactorial = () => {
    try {
      if (data.trim() === '') return;
      const value = parseInt(data);
      if (isNaN(value) || value < 0) {
        setData('Error: Invalid input');
      } else {
        let result = 1;
        for (let i = 2; i <= value; i++) {
          result *= i;
        }
        setData(result.toString());
      }
    } catch (error) {
      setData('');
    }
  };
  const calculateSin = () => {
    try {
      if (data.trim() === '') return;
      const degrees = parseFloat(data);
      const radians = (degrees * Math.PI) / 180;
      const result = Math.sin(radians);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  
  const calculateCos = () => {
    try {
      if (data.trim() === '') return;
      const degrees = parseFloat(data);
      const radians = (degrees * Math.PI) / 180;
      const result = Math.cos(radians);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  const calculatexponential = () => {
    try {
      if (data.trim() === '') return;
      const exponent = parseFloat(data);
      const result = Math.exp(exponent);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  
  const calculateTan = () => {
    try {
      if (data.trim() === '') return;
      const degrees = parseFloat(data);
      const radians = (degrees * Math.PI) / 180;
      const result = Math.tan(radians);
      setData(result.toString());
    } catch (error) {
      setData('');
    }
  };
  
  const handleScientificNotation = () => {
    try {
      if (data.trim() === '') return;
      const result = parseFloat(data);
      setData(result.toExponential());
    } catch (error) {
      setData('');
    }
  };
  const convertToRadians = () => {
    try {
      if (data.trim() === '') return;
      const degrees = parseFloat(data);
      const radians = (degrees * Math.PI) / 180;
      setData(radians.toString());
    } catch (error) {
      setData('');
    }
  };
const sinh = (x) => {
  return (Math.exp(x) - Math.exp(-x)) / 2;
};

const calculateSinh = () => {
  try {
    if (data.trim() === '') return;
    const value = parseFloat(data);
    const result = sinh(value);
    setData(result.toString());
  } catch (error) {
    setData('');
    console.error("Error during sinh calculation:", error);
  }
};
const cosh = (x) => {
  return (Math.exp(x) + Math.exp(-x)) / 2;
};

const calculateCosh = () => {
  try {
    if (data.trim() === '') return;
    const value = parseFloat(data);
    const result = cosh(value);
    setData(result.toString());
  } catch (error) {
    setData('');
  }
};
const tanh = (x) => {
  const sinhX = Math.sinh(x);
  const coshX = Math.cosh(x);
  return sinhX / coshX;
};

const calculateTanh = () => {
  try {
    if (data.trim() === '') return;
    const value = parseFloat(data);
    const result = tanh(value);
    setData(result.toString());
  } catch (error) {
    setData('');
  }
};
const insertPi = () => {
  setData(data.concat(Math.PI.toString()));
};
const generateRandomNumber = () => {
  const randomNumber = Math.random();
  setData(data.concat(randomNumber.toString()));
};

  return (
    <>
        <div className='container'>
            <div>
                <input placeholder='0' value={data}/>
            </div>
            <table>
              <tr>
            <th><button onClick={getValue} value="(">(</button></th>
              <th><button onClick={getValue} value=")">)</button></th>
              <th><button onClick={memoryClear} value="mc">mc</button></th>
              <th><button onClick={memoryAdd} value="m+">m+</button></th>
              <th><button onClick={memorySubstract} value="m-">m-</button></th>
              <th><button onClick={memoryRecall} value="mr">mr</button></th>
              <th><button onClick={clear} value="C">C</button></th>
              <th><button onClick={getValue} value="±">&plusmn;</button></th>
              <th><button onClick={getValue} value="%">%</button></th>
              <th><button className="yellowbtn" onClick={getValue} value="/">÷</button></th>
            </tr>
            <tr>
            <th><button onClick={getValue} value="2nd">2<sup>nd</sup></button></th>
            <th><button onClick={calculateSquare} value="^2">x&sup2;</button></th>
            <th><button onClick={calccube} value="x^3">x&sup3;</button></th>
            <th><button onClick={calccube} value="^">x<sup>y</sup></button></th>
            <th><button onClick={calculateExponential} value="e^x">e<sup>x</sup></button></th>
            <th><button onClick={calculatePowerOfTen} value="10^x">10<sup>x</sup></button></th>
            <th><button className="special" onClick={getValue} value="7">7</button></th>
            <th><button className="special" onClick={getValue} value="8">8</button></th>
            <th><button className="special" onClick={getValue} value="9">9</button></th>
            <th><button className="yellowbtn" onClick={getValue} value="*">x</button></th>
            </tr>
            <tr>
            <th><button onClick={calculateReciprocal} value="1/x">1/x</button></th>
            <th><button onClick={calculateSquareRoot} value="²√ₓ">&radic;x</button></th>
            <th><button onClick={calculateCubeRoot} value="x^3">&#8731;x</button></th>
            <th><button onClick={calculateYthRoot} value="x^y"><sup>y</sup>&radic;x</button></th>
            <th><button onClick={calculateNaturalLog} value="log">ln</button></th>
            <th><button onClick={calculateLogBase10} value="log 10">log<sub>10</sub></button></th>
            <th><button className="special" onClick={getValue} value="4">4</button></th>
            <th><button className="special" onClick={getValue} value="5">5</button></th>
            <th><button className="special" onClick={getValue} value="6">6</button></th>
            <th><button className="yellowbtn" onClick={getValue} value="-">-</button></th>
            </tr>
            <tr>
            <th><button onClick={calculateFactorial} value="!x">x!</button></th>
            <th><button onClick={calculateSin} value="sin">sin</button></th>
            <th><button onClick={calculateCos} value="cos">cos</button></th>
            <th><button onClick={calculateTan} value="x^y">tan</button></th>
            <th><button onClick={calculatexponential} value="e">e</button></th>
            <th><button onClick={handleScientificNotation} value="EE">EE</button></th>
            <th><button className="special" onClick={getValue} value="1">1</button></th>
            <th><button className="special" onClick={getValue} value="2">2</button></th>
            <th><button className="special" onClick={getValue} value="3">3</button></th>
            <th><button className="yellowbtn" onClick={getValue} value="+">+</button></th>
            </tr>
            <tr>
            <th><button onClick={convertToRadians} value="Rad">Rad</button></th>
            <th><button onClick={calculateSinh} value="sinh">sinh</button></th>
            <th><button onClick={calculateCosh} value="x^3">cosh</button></th>
            <th><button onClick={calculateTanh} value="x^y">tanh</button></th>
            <th><button onClick={insertPi} value="3.141">&pi;</button></th>
            <th><button onClick={generateRandomNumber} value="10^x">Rand</button></th>
            <th colspan="2"><button className="special0" onClick={getValue} value="0">0</button></th>
            <th><button className="special" onClick={getValue} value=".">.</button></th>
            <th><button className="yellowbtn" onClick={calculation} value="=">=</button></th>
            </tr>
            </table>
        </div>
    </>
  )
}

export default Calcu