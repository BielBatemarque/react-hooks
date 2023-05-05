import './Content.css';
import {Routes, Route} from 'react-router-dom';
import { UseState } from '../../views/examples/UseState';
import { Home } from '../../views/examples/Home';
import { UseEffect } from '../../views/examples/UseEffect';
import { UseRef } from '../../views/examples/UseRef';
import { UseMemo } from '../../views/examples/UseMemo';


export const Content = () => {
    return(
        <main className="Content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/UseState" exact element={<UseState />} />
          <Route path="/UseEffect" exact element={< UseEffect/>} />
          <Route path="/UseRef" exact element={< UseRef/>} />
          <Route path="/UseMemo" exact element={< UseMemo/>} />
        </Routes>
      </main>
    );
}