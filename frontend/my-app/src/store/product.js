// reducer for getting products
const GET_PRODUCTS = '/products/GET_PRODUCTS'
export const getProducts = (products)=>{
    return{
        type:GET_PRODUCTS,
        products
    }
}

// thunk action for getting product
export const getProductsThunk =()=> async (dispatch)=>{
    const response = fetch('/api/products')
    const data = await response.json()
    if(response.ok){
        dispatch(getProducts(data))
    }else{
        return data.error
    }
}
const initialState = {}

function productReducer(state=initialState,action){
    switch(action.type){
        case GET_PRODUCTS:{
            const productsObj = {}
            action.products.forEach(product=>{
                productsObj[product.id] = product
            })
            return productsObj
        }
    }
    return state
}

export default productReducer
