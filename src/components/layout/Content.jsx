import './Content.css';
import {Routes, Route} from 'react-router-dom';
import { UseState } from '../../views/examples/UseState';
import { Home } from '../../views/examples/Home';
import { UseEffect } from '../../views/examples/UseEffect';
import { UseRef } from '../../views/examples/UseRef';


export const Content = () => {
    return(
        <main className="Content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/UseState" exact element={<UseState />} />
        </Routes>
      </main>
    );
}