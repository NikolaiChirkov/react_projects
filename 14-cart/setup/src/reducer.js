import CartItem from "./CartItem";

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}
        break;

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
            let tempCartIncrease = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return {...cartItem, amount: cartItem.amount + 1}
                }

                return cartItem;
            });
            return {
                ...state,
                cart: tempCartIncrease
            }
        break;

        case 'DECREASE_AMOUNT':
            let tempCartDecrease = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem;
            }).filter((cartItem) => cartItem.amount !== 0);
            return {
                ...state,
                cart: tempCartDecrease
            }
        break;

        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal
            }, {
                total: 0,
                amount: 0
            });

            total = parseFloat(total.toFixed());

            return {...state, total, amount}
        break;

        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, loading: false}
        break;

        default:
            return state;
        break;
    }
}

export default reducer;