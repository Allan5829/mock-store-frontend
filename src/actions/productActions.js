// maybe use https://fakestoreapi.com/

export const getAllProducts = (filterTerm) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DID_MOUNT'})
      fetch('products')
      .then(response => response.json())
      .then(p => dispatch({ type: 'INDEX_PRODUCTS', payload: p, filterBy: filterTerm }))
    }
  }

export const updateNavFilter = (filterTerm) => {
    return (dispatch) => {
      dispatch({ type: 'NAV_FILTER_UPDATE', filterBy: filterTerm})
    }
  }

export const addNewProduct = (product) => {
    return (dispatch) => {
      dispatch({ type: 'ADDING_PRODUCT'})
      fetch('products')
      .then(response => response.json())
      .then(p => dispatch({ type: 'PRODUCT_ADDED', payload: p }))
    }
  }