import Chats from './Chats';

import styles from './App.module.scss';
import { createContext } from 'react';

const appContext = createContext()

function App() {

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
