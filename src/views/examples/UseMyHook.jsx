import { SectionTitle } from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const UseMyHook = () => {
    const[count, inc, dec] = useCounter(10);
    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url);

    const showState = (states) => {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li> )
    }

    return(
        <div className="useCustom">
            <SectionTitle title={'Meu hook'} />

            <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc()}>+1</button>
                    <button className="btn" onClick={() => dec()}>-1</button>
                </div>

                <SectionTitle title={'Meu hook #02'} />
                    <div className="center">
                        <ul>
                            {response.data ? showState(response.data) : false}
                        </ul>
                    </div>

        </div>
    );
}