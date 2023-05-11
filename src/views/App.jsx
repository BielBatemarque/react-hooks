import './App.css';
import { Menu } from '../components/layout/Menu';
import { Content } from '../components/layout/Content';
import { BrowserRouter} from 'react-router-dom';
import { DataContext, data } from '../data/DataContext';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(data);

  return (
    <DataContext.Provider value={{state, setState}}>
     <div className="App">
        <BrowserRouter>
         <Menu />
          <Content />
        </BrowserRouter>
      </div>
    </DataContext.Provider>
  );
}

export default App;
