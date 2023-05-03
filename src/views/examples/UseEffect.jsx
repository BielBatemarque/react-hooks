import { useEffect, useState } from 'react';
import { SectionTitle } from '../../components/layout/SectionTitle';

const calcFatorial = (n) => {
    if(n < 0){
        return -1;
    }
    if(n ===0) {
        return 1;
    }
    return calcFatorial(n -1 ) * n;
};

export const UseEffect = () => {
    const[number, setNumber] = useState(1);
    const[fatorial, setFatorial] = useState(1);

    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect(() => {
        if(fatorial > 1000000){
            document.title = 'Eita!!!';
        }else{
            document.title = 'React App';
        }
    }, [fatorial]);

    return(
        <div className="useEffect">
            <SectionTitle title='useEffect' />
                <h3>Permite a utilização de efeitos Colaterais nos componentes</h3>

                <div className="center">
                    <span className="text">Fatorial</span>
                    <span className='text red'>{fatorial}</span>
                    <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)}/>
                </div>
        </div>
    );
};