import { useReducer } from 'react';
import { SectionTitle } from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2};
        case 'login':
            return {...state, user: {name : action.payload}};
        case 'number_mult7':
            return {...state, number : state.number * 7};
        case 'divide25':
            return {...state, number: state.number / 25};
        case 'arredondaNumero':
                return{...state, number: Math.round(state.number)};
            case 'insereN':
                return {...state, number: state.number + action.payload}
        default:
            return state;
    }
}

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div className="useReducer">
            <SectionTitle title={'Hook useReducer'} />
                <h3>Uma outra forma de ter estado em componentes funcionais</h3>

                <div className="center">
                    {state.user ? <span className="text">{state.user.name}</span> 
                    : <span className="text">sem usuário</span> }
                    <span className="text">{}</span>
                    <span className="text">{state.number}</span>
                    <div>
                        <button className='btn' onClick={() => dispatch({ type: 'number_add2' })}>+2</button>
                        <button className='btn' onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Logar</button>
                        <button className='btn' onClick={() => dispatch({ type: 'number_mult7' })}>*7</button>
                        <button className='btn' onClick={() => dispatch({ type: 'divide25' })}>/25</button>
                        <button className='btn' onClick={() => dispatch({ type: 'arredondaNumero' })}>Arredonda</button>
                        <button className='btn' onClick={() => dispatch({ type: 'insereN', payload:5 })}>Insere N</button>
                    </div>
                </div>
        </div>
    );
};