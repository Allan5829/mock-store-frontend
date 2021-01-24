export default (state = {products: [], loading: false, sliceStart: 0, sliceEnd: 8}, action) => {
    switch(action.type) {

        case('LOADING_DID_MOUNT'):
            return {...state, loading: true}
        
        case('INDEX_PRODUCTS'):
            switch(action.filterBy) {
                case('Men'):
                    return {...state, loading: false, sliceStart: 0, sliceEnd: 8, 
                        products: action.payload.filter(p => p.gender === "Men")}
                case('Women'):
                    return {...state, loading: false, sliceStart: 0, sliceEnd: 8, 
                        products: action.payload.filter(p => p.gender === "Women")}
                case('Top'):
                    return {...state, loading: false, sliceStart: 0, sliceEnd: 8, 
                        products: action.payload.filter(p => p.main_category === "Top")}
                case('Bottom'):
                    return {...state, loading: false, sliceStart: 0, sliceEnd: 8, 
                        products: action.payload.filter(p => p.main_category === "Bottom")}
                case('Accessory'):
                    return {...state, loading: false, sliceStart: 0, sliceEnd: 8, 
                        products: action.payload.filter(p => p.main_category === "Accessory")}
                default:
                    return {...state, loading: false, sliceStart: 0, sliceEnd: 8, 
                        products: action.payload}
            } 
        
        case ('ADDING_PRODUCT'):
            return { ...state, loading: true }

        case ('PRODUCT_ADDED'):
            return { ...state, loading: false, products: [...state.products, action.payload] }

        case ('UPDATE_PAGE'):
            return {...state, sliceStart: ((action.payload - 1) * 8), sliceEnd: (action.payload * 8)}

        case ('DELETING_PRODUCT'):
            return { ...state, loading: true }
        
        case ('PRODUCT_DELETED'):
            return { ...state, loading: false, products: state.products.filter(p => p.id != action.payload)}
        
        default: 
            return state
    }
}