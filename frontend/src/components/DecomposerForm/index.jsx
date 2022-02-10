import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { api } from '../services/api';
import { Result } from '../Result';

import styles from './styles.module.scss';

export function DecomposerForm() {
  const [number, setNumber] = useState('');

  async function handleDecomposer(e) {
    e.preventDefault();

    if (number === '') {
      toast.error('Digite um número');
      return;
    }

    // const response = await api.post('/transactions', {
    //   number,
    // });
    // const { transaction } = response.data;

    alert(`Decompondo número ${number}`);

    setNumber('');
  }

  return (
    <>
      <ToastContainer autoClose={2000} />

      <form onSubmit={handleDecomposer} className={styles.formContainer}>
        <input
          type="number"
          placeholder="Digite o número a decompor"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button type="submit">Decompor</button>
      </form>

      <Result />
    </>
  );
}
