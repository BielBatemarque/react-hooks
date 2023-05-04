import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../../components/layout/SectionTitle";

export const UseRef = () => {
    const merge = (s1, s2) => {
        return s1 + s2;
    }

    const[value1, setValue1] = useState('');
    const[value2, setValue2] = useState('');
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    
    useEffect(() =>{
        count.current++;
        myInput2.current.focus();
    }, [value1]);

    useEffect(() =>{
        count.current++;
        myInput1.current.focus();
    }, [value2]);


    return(
        <div className="NotFound">
            <SectionTitle title={'hook useRef'} />
                <h3>Retorna um objeto com a propriedade .current</h3>

                <SectionTitle title='Exercicio #01' />
                <div className="center">
                 <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>

                 </div>
                    <input type="text" className="input" value={value1} onChange={(e) => setValue1(e.target.value)} ref={myInput1}/>
                </div>

                <SectionTitle title='Exercicio #02' />
                    <div className="centrer">
                        <input type="text" className="input" value={value2} onChange={(e) => setValue2(e.target.value)} ref={myInput2}/>
                    </div>
        </div>
    );
}