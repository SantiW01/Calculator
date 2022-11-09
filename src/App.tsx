import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import './Styles/App.scss';

export default function Calculadora() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const result: number = 0;
  return(
    <div>
      <div className='card rounded-0' id="body">
        <div>
          <p className='text-end text-bg-info'>{result}</p>
        </div>
        <div>
          <ButtonGroup className='mb-2'>
            <Button className='rounded-0 m-2' >1</Button>
            <Button className='rounded-0 m-2' >2</Button>
            <Button className='rounded-0 m-2' >3</Button>
            <Button className='rounded-0 m-2' >+</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className='mb-2'>
            <Button className='rounded-0 m-2' >4</Button>
            <Button className='rounded-0 m-2' >5</Button>
            <Button className='rounded-0 m-2' >6</Button>
            <Button className='rounded-0 m-2' >-</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className='mb-2'>
            <Button className='rounded-0 m-2' >7</Button>
            <Button className='rounded-0 m-2' >8</Button>
            <Button className='rounded-0 m-2' >9</Button>
            <Button className='rounded-0 m-2' >*</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className='mb-2'>
          <Button className='rounded-0 m-2'>0</Button>
            <Button className='rounded-0 m-2' >,</Button>
            <Button className='rounded-0 m-2' >=</Button>
            <Button className='rounded-0 m-2' >/</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}
