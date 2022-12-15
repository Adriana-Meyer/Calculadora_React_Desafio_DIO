import  Input  from './components/Input/input-index';
import  Button  from './components/Button/button-index';

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

/* OPERAÇÃO: LIMPAR */
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

/* OPERAÇÃO: SOMA */
  const handleSumNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

/* OPERAÇÃO: SUBTRAÇÃO */
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }
    
/* OPERAÇÃO: DIVISÃO */
  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

/* OPERAÇÃO: MULTIPLICAÇÃO */
const handleVersusNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('*');
  } else {
    const versus = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(versus));
    setOperation('');
  }
}

/* OPERAÇÃO: IGUAL */
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        case '*':
          handleVersusNumbers();
          break;
        default: 
          break;
      } 
    }
  }

  return (
    <Container> 
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="x" onClick={handleVersusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
        </Row>
        <Row>
          <Button label="-" onClick={handleMinusNumbers}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="+" onClick={handleSumNumbers}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
