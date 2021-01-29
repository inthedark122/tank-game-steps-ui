import logo from './logo.svg';
import styles from './App.module.css';

export function App() {

  return (
    <header className={styles.app}>
      <div className={styles.logo}>
          <img src={logo} alt="logo" />
      </div>
      <a href="#">
        Переключить логотип
      </a>
    </header>
  );
}
