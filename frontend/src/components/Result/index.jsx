import styles from './styles.module.scss';

export function Result() {
  return (
    <section className={styles.resultContainer}>
      <p>
        Número decomposto: <span>41</span>
      </p>
      <p>
        Números divisores: <span>1, 3, 5</span>
      </p>
      <p>
        Divisores primos: <span>1, 3, 5</span>
      </p>
    </section>
  );
}
