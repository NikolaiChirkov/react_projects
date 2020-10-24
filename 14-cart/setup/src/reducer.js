const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}

        case 'CLEAR_CART':
            return {...state, cart: []}

        case 'REMOVE_ITEM':
            return {
                ...state, 
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
            }

        case 'TOGGLE_AMOUNT':
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const amount = action.payload.type === 'inc' ? 
                        cartItem.amount + 1 :
                        cartItem.amount - 1;
                    
                    return {...cartItem, amount: amount}
                }
                return cartItem;
            }).filter((cartItem) => cartItem.amount !== 0);
            return {
                ...state,
                cart: tempCart
            }

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

        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, loading: false}

        default:
            throw new Error('Wrong reducer action type');
    }
}

export default reducer;