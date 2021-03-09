let productReducer = (state = {products: [], loading: false, sliceStart: 0, sliceEnd: 8, currentProduct: []}, action) => {
    switch(action.type) {

        case('LOADING_DID_MOUNT'):
            return {...state, loading: true}
        
        case('INDEX_PRODUCTS'):
            switch(action.filterBy) {
                case('men'):
                    return {...state, loading: false, sliceStart: action.start, sliceEnd: action.end, 
                        products: action.payload.filter(p => p.gender === "Men")}
                case('women'):
                    return {...state, loading: false, sliceStart: action.start, sliceEnd: action.end, 
                        products: action.payload.filter(p => p.gender === "Women")}
                case('top'):
                    return {...state, loading: false, sliceStart: action.start, sliceEnd: action.end, 
                        products: action.payload.filter(p => p.main_category === "Top")}
                case('bottom'):
                    return {...state, loading: false, sliceStart: action.start, sliceEnd: action.end, 
                        products: action.payload.filter(p => p.main_category === "Bottom")}
                case('accessory'):
                    return {...state, loading: false, sliceStart: action.start, sliceEnd: action.end, 
                        products: action.payload.filter(p => p.main_category === "Accessory")}
                default:
                    return {...state, loading: false, sliceStart: action.start, sliceEnd: action.end, 
                        products: action.payload}
            } 
        
        case ('FINDING_PRODUCT'):
            return {...state, loading: false, currentProduct: action.payload}
        
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
        
        case ('SORT_PRODUCTS'):            
            switch(action.payload) {
                case('Price $-$$$'):
                    return {...state, sliceStart: 0, sliceEnd: 8, 
                        products: state.products.slice().sort((a, b) => {
                            return a.price - b.price 
                        })
                    }
                case('Price $$$-$'):
                    return {...state, sliceStart: 0, sliceEnd: 8, 
                        products: state.products.slice().sort((a, b) => {
                            return b.price - a.price 
                        })
                    }
                case('Newest'):
                    return {...state, sliceStart: 0, sliceEnd: 8, 
                        products: state.products.slice().sort((a, b) => {
                            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                        })
                    }
                case('Oldest'):
                    return {...state, sliceStart: 0, sliceEnd: 8, 
                        products: state.products.slice().sort((a, b) => {
                            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime() 
                        })
                    }
                default:
                    return state
            } 
        
        default: 
            return state
    }
}

export default productReducer;