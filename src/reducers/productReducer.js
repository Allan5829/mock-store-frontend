export default (state = {products: [], loading: false}, action) => {
    switch(action.type) {

        case('LOADING_DID_MOUNT'):
            console.log("inside loading did mount")
            return {...state, loading: true}
        
        case('INDEX_PRODUCTS'):
            console.log("inside index products")
            console.log(action.payload)
            return {...state, loading: false, products: action.payload}
        
        default: 
            return state
    }
}