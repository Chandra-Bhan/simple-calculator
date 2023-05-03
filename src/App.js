import React, { useState, useRef } from 'react';
import './style.css';
import Button from './components/Button';

export default function App() {
  const btnName = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '*',
    '0',
    '/',
    '=',
    'C',
  ];
  const [number, setNumber] = React.useState('');
  const operation = useRef('');
  let num1 = useRef('');
  let num2 = useRef('');

  function loginOfCalculator(num) {
    console.log(num);
    console.log(Number('1+4'));

    switch (num) {
      case '1':
        setNumber(number + '1');
        break;
      case '2':
        setNumber(number + '2');
        break;
      case '3':
        setNumber(number + '3');
        break;
      case '4':
        setNumber(number + '4');
        break;
      case '5':
        setNumber(number + '5');
        break;
      case '6':
        setNumber(number + '6');
        break;
      case '7':
        setNumber(number + '7');
        break;
      case '8':
        setNumber(number + '8');
        break;
      case '9':
        setNumber(number + '9');
        break;
      case '0':
        setNumber(number + '0');
        break;
      case 'C':
        setNumber('');
        break;
      case '+':
        operation.current = '+';
        num1.current = parseInt(number);
        setNumber('');
        break;
      case '-':
        operation.current = '-';
        num1.current = parseInt(number);
        setNumber('');
        break;
      case '*':
        operation.current = '*';
        num1.current = parseInt(number);
        setNumber('');
        break;
      case '/':
        operation.current = '/';
        num1.current = parseInt(number);
        setNumber('');
        break;
      case '=':
        let op = 0;
        if (operation.current == '+') {
          num2.current = number;
          op = parseInt(num1.current) + parseInt(num2.current);
        } else if (operation.current == '-') {
          num2.current = number;
          op = parseInt(num1.current) - parseInt(num2.current);
        } else if (operation.current == '*') {
          num2.current = number;
          op = parseInt(num1.current) * parseInt(num2.current);
        } else if (operation.current == '/') {
          num2.current = number;
          op = parseInt(num1.current) / parseInt(num2.current);
        }
        setNumber(op);

        num1.current = '';
        num2.current = '';
        operation.current = '';
        break;
    }
  }

  return (
    <div
      style={{
        border: '5px solid blue',
        width: '70%',
        margin: 'auto',
        marginTop: '50px',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '30px', color: 'red', textAlign: 'center' }}>
        {' '}
        A Simple Calculator
      </h1>
      <div
        style={{
          width: 'fit-content',
          border: '5px solid tomato',
          margin: 'auto',
          marginTop: '100px',
          padding: '20px',
        }}
      >
        <div>
          <p>
            {' '}
            {num1.current} {operation.current}
            {num2.current}
          </p>
        </div>
        <input
          type="number"
          placeholder="0000"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{
            fontSize: '25px',
            padding: '20px',
            borderColor: 'tomato',
            backgroundColor: '#CCCCCC',
            fontWeight: 'bold',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',

            justifyContent: 'center',
          }}
        >
          {btnName.map((item) => (
            <Button btnName={item} loginOfCalculator={loginOfCalculator} />
          ))}
        </div>
      </div>
    </div>
  );
}
