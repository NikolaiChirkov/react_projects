import CartItem from "./CartItem";

const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return {...state, cart: []}
        break;
        case 'REMOVE_ITEM':
            return {
                ...state, 
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
            }
        break;
        case 'INCREASE_AMOUNT':
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return {...cartItem, amount: cartItem.amount + 1}
                }

                return cartItem;
            });
            return {
                ...state,
                cart: tempCart
            }
        break;
        default:
            return state;
        break;
    }
}

export default reducer;