import { useCallback, useState } from 'react';
import { SectionTitle } from '../../components/layout/SectionTitle';
import UseCallbackButtons  from './UseCallbackButtons';

export const UseCallback = () => {
    //muito utilizado para questões performáticas
    const[count, setCount] = useState(0);

    const inc = useCallback((delta) => {
        setCount(curr => delta + delta);
    }, [setCount]);

    return(
        <div className="useCallback">
            <SectionTitle title={'Hook useCallback'} />
                <h3>Retorna uma função memorizada(armazena em cache)</h3>

                <div className="center">
                    <span className="text">{count}</span>

                    <UseCallbackButtons inc={inc}/>
                </div>
        </div>
    );
};

