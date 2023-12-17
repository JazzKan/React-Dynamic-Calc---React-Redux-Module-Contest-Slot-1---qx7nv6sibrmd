import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const num1 = parseFloat(inputValue1) || 0;
    const num2 = parseFloat(inputValue2) || 0;
    setSum(num1 + num2);
  }, [inputValue1, inputValue2]);

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  return (
    <div id="main">
      <input id='input1' value={inputValue1} onChange={handleInputChange1} />
      +
      <input id='input2' value={inputValue2} onChange={handleInputChange2} />
      
      <p id='result'>{sum}</p>
    </div>
  );
};


export default App;
