export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

export const reducer = (state, action) => {
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