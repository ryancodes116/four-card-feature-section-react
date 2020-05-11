import React from 'react';
import styles from './App.module.css';

import Header from '../src/components/Header.js';
import CardSection from '../src/components/CardSection';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <CardSection />
    </div>
  );
}

export default App;
