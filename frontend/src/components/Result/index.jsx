import styles from './styles.module.scss';

export function Result({ number, dividingNumbers, primeNumbers }) {
  return (
    <section className={styles.resultContainer}>
      <p>
        Número decomposto: <span>{number}</span>
      </p>
      <p>
        Números divisores: <span>{dividingNumbers.join(', ')}</span>
      </p>
      <p>
        Divisores primos: <span>{primeNumbers.join(', ')}</span>
      </p>
    </section>
  );
}
