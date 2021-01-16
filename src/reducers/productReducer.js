export default (state = {products: [], loading: false, filterTerm: "none"}, action) => {
    switch(action.type) {

        case('LOADING_DID_MOUNT'):
            return {...state, loading: true}
        
        case('INDEX_PRODUCTS'):
            switch(action.filterBy) {
                case('none'):
                    return {...state, loading: false, products: action.payload}
                case('Men'):
                    return {...state, loading: false, filterTerm: action.filterBy, products: action.payload.filter(p => p.gender === "Men")}
                case('Women'):
                    return {...state, loading: false, filterTerm: action.filterBy, products: action.payload.filter(p => p.gender === "Women")}
                case('Top'):
                    return {...state, loading: false, filterTerm: action.filterBy, products: action.payload.filter(p => p.main_category === "Top")}
                case('Bottom'):
                    return {...state, loading: false, filterTerm: action.filterBy, products: action.payload.filter(p => p.main_category === "Bottom")}
                case('Accessory'):
                    return {...state, loading: false, filterTerm: action.filterBy, products: action.payload.filter(p => p.main_category === "Accessory")}
            } 
        
        case('NAV_FILTER_UPDATE'):
            return {...state, filterTerm: action.filterBy}
        
        default: 
            return state
    }
}