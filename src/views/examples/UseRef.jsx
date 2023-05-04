import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../../components/layout/SectionTitle";

export const UseRef = () => {
    const[value1, setValue1] = useState('');
    const count = useRef(0);

    
    useEffect(() =>{
        count.current = count.current + 1; 
    }, [value1]);

    return(
        <div className="NotFound">
            <SectionTitle title={'hook useRef'} />
                <h3>Retorna um objeto com a propriedade .current</h3>

                <SectionTitle title='Exercicio #01' />
                <div className="center">
                 <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>

                 </div>
                    <input type="text" className="input" onChange={(e) => setValue1(e.target.value)}/>
                </div>
        </div>
    );
}