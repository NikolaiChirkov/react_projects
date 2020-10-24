import CartItem from "./CartItem";

const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return {...state, cart: []}
        break;
        case 'REMOVE_ITEM':
            return {
                ...state, 
                cart: state.cart.filter((CartItem) => CartItem.id !== action.payload)
            }
        break;
    }

    return state;
}

export default reducer;