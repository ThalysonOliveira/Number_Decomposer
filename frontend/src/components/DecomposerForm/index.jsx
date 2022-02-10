import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from '../../services/api';
import { Result } from '../Result';

import styles from './styles.module.scss';

export function DecomposerForm() {
  const [number, setNumber] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [dividingNumbers, setDividingNumbers] = useState([]);
  const [primeNumbers, setPrimeNumbers] = useState([]);

  async function handleDecomposer(e) {
    e.preventDefault();

    setInputNumber(Number(inputNumber));

    if (inputNumber === '') {
      toast.error('Digite um número');
      setInputNumber('');
      setNumber('');
      setDividingNumbers([]);
      setPrimeNumbers([]);
      return;
    }

    if (inputNumber <= 0) {
      toast.error('O número fornecido não pode ser menor que um!');
      setInputNumber('');
      setNumber('');
      setDividingNumbers([]);
      setPrimeNumbers([]);
      return;
    }

    const response = await api.post('/number-decomposer', {
      number: Number(inputNumber),
    });
    const { data } = response.data;
    console.log(data);
    console.log(response);

    if (!response.ok) {
      toast.error(response.message);
    }

    toast.success(response.data.message);
    setNumber(data?.number);
    setDividingNumbers(data?.dividingNumbers);
    setPrimeNumbers(data?.primeNumbers);
    setInputNumber('');
  }

  return (
    <>
      <ToastContainer autoClose={2000} />

      <form onSubmit={handleDecomposer} className={styles.formContainer}>
        <input
          type="number"
          placeholder="Digite o número a decompor"
          value={inputNumber}
          onChange={(event) => setInputNumber(event.target.value)}
        />
        <button type="submit">Decompor</button>
      </form>

      <Result
        number={number}
        dividingNumbers={dividingNumbers}
        primeNumbers={primeNumbers}
      />
    </>
  );
}
