import {Hijo} from './Hijo.jsx'
import {useCallback, useState} from 'react';

export const Padre = () => {

  const numbers = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
    (increment) => {
      setValor((value) => value + increment)
    },
    []
  )

  // const incrementar = (num) => {
  //   setValor(valor + num)
  // }

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr/>

      {
        numbers.map(number => (
          <Hijo
            key={number}
            numero={number}
            incrementar={incrementar}
          />
        ))
      }
    </div>
  )
}
