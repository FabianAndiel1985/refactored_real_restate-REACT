import {
    checkIfProductIsInCart,
    increaseProductAmountAndPrice,
    decreaseOrRemoveProduct
} from './reducer-helper-functions';

let initialState = [];

function counter(state = initialState, action) {

    if (action.type == "ADD") {

        let newPurchases = null;

        let newProductInCart = checkIfProductIsInCart(state, action);

        if (newProductInCart) {
            newPurchases = [...state, action.product];
            state = newPurchases;
        } else {
            increaseProductAmountAndPrice(state, action);
        }

        return state;
    }


    if (action.type == "DECREMENT") {
        console.log("hallo");
        console.log(action.product.id);
        state.forEach((item, index) => {
            console.log(item.id);
            if (item.id == action.product.id) {              
                decreaseOrRemoveProduct(state, item, action, index);
            }
        })

        let newState = [...state];
        state = newState;

        return state;
    }

}

export default counter;