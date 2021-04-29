import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalContext} from './context/GlobalContext'
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <GlobalContext.Provider>
      <Router>
        <AppRouter />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
