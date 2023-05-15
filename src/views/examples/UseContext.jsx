import { useContext, useEffect } from "react";
import { SectionTitle } from "../../components/layout/SectionTitle";
import { DataContext } from "../../data/DataContext";
import { AppContext } from '../../data/Store';

export const UseContext = () => {
   const context =  useContext(DataContext);

    const setNumber = (n) => {
        context.setState({
            ...context.state,
           number: context.state.number + n,
        });
    };
    const {number, setNuber, text} = useContext(AppContext);


    return(
        <div className="useContext">
            <SectionTitle title={'Hook useContext'} />
                <h3>ContextAPI Aceita um objeto de contexto e retorna o valor atual do contexto!</h3>

                <SectionTitle title={'Exercicio #01'} />
                <div className="center">
                    <span className="text">{context.state.text}</span>
                    <span className="text">{context.state.number}</span>

                    <div>
                        <button className="btn" onClick={() => setNumber(+1)}>+1</button>
                        <button className="btn"onClick={() => setNumber(-1)}>-1</button>
                    </div>
                </div>

                <SectionTitle title={'Exercicio #02'} />
                <div className="center">
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    <div>
                        <button className="btn" onClick={() => setNuber(number - 1)}>-1</button>
                        <button className="btn" onClick={() => setNuber(number + 1)}>+1</button>
                    </div>
                </div>
        </div>
    );
};