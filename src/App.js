import { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

export function App() {
  const [showLogo, setShowLogo] = useState(true);
  const handleClick = (event) => {
    event.preventDefault()
    setShowLogo((prevShowLogo) => !prevShowLogo)
  }

  return (
    <header className={styles.app}>
      <div className={styles.logo}>
        {showLogo && <img src={logo} alt="logo" />}
      </div>
      <a onClick={handleClick} href="#">
        Переключить логотип
      </a>
    </header>
  );
}
