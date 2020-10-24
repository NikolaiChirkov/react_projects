const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return {...state, cart: []}
        break;
    }

    return state;
}

export default reducer;