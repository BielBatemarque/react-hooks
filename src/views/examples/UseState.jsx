import { useState } from "react";
import { SectionTitle } from '../../components/layout/SectionTitle';

export const UseState = () => {
    const[count, setCount] = useState(0);
    const [name, setName] = useState('inicial');

    return (
      <div className="UseState">
          <h1>Hook UseState</h1>

      <SectionTitle title='Exercicio #1' />
          <div className="center">
            <span className="text">{count}</span>
            <div className="btns">

            <button className="btn" onClick={() => setCount(s => s + 1)}>+1</button>
            <button className="btn" onClick={() => setCount(s => s - 1)}>-1</button>
            <button className="btn" onClick={() => setCount(1000)}>1000</button>
            <button className="btn" onClick={() => setCount(0)}>0</button>
            </div>
          </div>

        <SectionTitle title='Exercicio #02' />
          <input type="text" className="input"  value={name} onChange={(e) => setName(e.target.value)}/>
            <h2 className="textinput">{name}</h2>
      </div>
    );
  }

  