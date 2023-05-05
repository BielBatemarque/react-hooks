import { useMemo, useState } from "react";
import { SectionTitle } from "../../components/layout/SectionTitle";

export const UseMemo = () => {
    const sum = (a, b) => {
        const future = Date.now() + 200;
        while(Date.now() < future){}
        return a+b;
    } 

    const[n1, setN1] = useState(0);
    const[n2, setN2] = useState(0);
    const[n3, setN3] = useState(0);

    const result = useMemo(() => sum(n1, n2), [n1, n2]);

    return(
        <div className="useMemo">
            <SectionTitle title='useMemo' />
                <h3>Retorna um valor memorizado</h3>

                <div className="center">
                    <input type="number" className="input" value={n1} onChange={(e) => setN1(Number(e.target.value))} />
                    <input type="number" className="input" value={n2} onChange={(e) => setN2(Number(e.target.value))} />
                    <input type="number" className="input" value={n3} onChange={(e) => setN3(Number(e.target.value))} />

                    <span className="text">{result}</span>
                </div>
        </div>
    );
}