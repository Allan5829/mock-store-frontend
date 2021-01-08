export const getAllProducts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_DID_MOUNT'})
        console.log("inside actions")
      fetch('products')
      .then(response => response.json())
      .then(p => dispatch({ type: 'INDEX_PRODUCTS', payload: p }))
    }
  }