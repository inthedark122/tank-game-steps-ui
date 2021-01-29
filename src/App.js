import logo from './logo.svg';
import styles from './App.module.css';

export function App() {
  const handleClick = (event) => {
    alert("Вы нажали на ссылку")
  }

  return (
    <header className={styles.app}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <a onClick={handleClick} href="#">
        Переключить логотип
      </a>
    </header>
  );
}
