import { createContext, useEffect } from 'react';

import Chats from './Chats';
import styles from './App.module.scss';

const appContext = createContext()

function App() {
  useEffect(function () {
    fetch('./api').then(a => a.json()).then(console.log)
  }, [])
  return (

    <div className={styles.App}>
      <appContext.Provider value={"hello"}>
        <Chats />
      </appContext.Provider>
    </div>
  );
}

export default App;
export { appContext }
