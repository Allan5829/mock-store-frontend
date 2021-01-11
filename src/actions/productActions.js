// maybe use https://fakestoreapi.com/

export const getAllProducts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DID_MOUNT'})
      fetch('products')
      .then(response => response.json())
      .then(p => dispatch({ type: 'INDEX_PRODUCTS', payload: p }))
    }
  }