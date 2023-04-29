import { useParams } from 'react-router-dom';

export const UseEffect = () => {
    const { id } = useParams();

    return(
        <div className="Param">
            <h1>param</h1>
            <p>Valor: {id}</p>
        </div>
    );
};