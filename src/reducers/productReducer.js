export default (state = {products: [], loading: false}, action) => {
    switch(action.type) {

        case('LOADING_DID_MOUNT'):
            return {...state, loading: true}
        
        case('INDEX_PRODUCTS'):
            return {...state, loading: false, products: action.payload}
        
        default: 
            return state
    }
}