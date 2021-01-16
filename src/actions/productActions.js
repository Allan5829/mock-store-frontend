// maybe use https://fakestoreapi.com/
const URL = "http://localhost:3001" //using proxy causes error in addNewProduct

export const getAllProducts = (filterTerm) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DID_MOUNT'})
      fetch(URL + '/products')
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
      fetch(URL + '/products', {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
              'Content-Type': 'application/json',
              "Accept": 'application/json'
          }
      })
      .then(response => response.json())
      .then(p => dispatch({ type: 'PRODUCT_ADDED', payload: p }))
    }
  }