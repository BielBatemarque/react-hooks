import { useContext } from "react";
import { SectionTitle } from "../../components/layout/SectionTitle";
import { DataContext } from "../../data/DataContext";

export const UseContext = () => {
   const context =  useContext(DataContext);

    const setNumber = (n) => {
        context.setState({
            ...context.state,
           number: context.state.number + n,
        });
    };

    return(
        <div className="useContext">
            <SectionTitle title={'Hook useContext'} />
                <h3>ContextAPI Aceita um objeto de contexto e retorna o valor atual do contexto!</h3>

                <div className="center">
                    <span className="text">{context.state.text}</span>
                    <span className="text">{context.state.number}</span>

                    <div>
                        <button className="btn" onClick={() => setNumber(+1)}>+1</button>
                        <button className="btn"onClick={() => setNumber(-1)}>-1</button>
                    </div>
                </div>
        </div>
    );
};