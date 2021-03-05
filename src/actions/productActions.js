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

export const updateCurrentPage = (page) => {
    return (dispatch) => {
      dispatch({ type: 'UPDATE_PAGE', payload: page})
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

export const deleteProduct = (id) => {
    return dispatch => {
        dispatch({ type: "DELETING_PRODUCT" })
        fetch(URL + `/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(() => dispatch({ type: "PRODUCT_DELETED", payload: id }))
    }
  }

export const getProduct = (id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DID_MOUNT'})
      fetch(URL + '/products/' + id)
      .then(response => response.json())
      .then(p => dispatch({ type: 'FINDING_PRODUCT', payload: p }))
    }
  }

export const sortProducts = (sortby) => {
  return (dispatch) => {
    dispatch({ type: 'SORT_PRODUCTS', payload: sortby})
  }
}