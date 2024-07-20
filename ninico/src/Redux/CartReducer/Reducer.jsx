import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "../Types"

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData):[]
}

const Reducer = (data = getCartDataFromLocalStorage(), action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.warn('AddToCart Called', action);

            const existingProduct = data.findIndex(item => item.id === action.data.id)
            let updatedCartData;
            if (existingProduct >= 0) {
                updatedCartData = data.map((item) => item.id === action.data.id ? {...item , quantity:item.quantity += 1 } : item )
                localStorage.setItem('cart' , JSON.stringify(updatedCartData))
            }
            else{
                updatedCartData = [{...action.data , quantity : 1 } , ...data]

            }

            localStorage.setItem('cart' , JSON.stringify(updatedCartData))

            return updatedCartData

        case REMOVE_TO_CART:
            console.warn('RemoveToCart Called', action);
            const remiderItem = data.filter((item) => item.id !== action.data)
            // data.length =data.length ?  data.length-1 : []
            localStorage.setItem('cart' , JSON.stringify(remiderItem))
            return remiderItem

        case EMPTY_CART:  
            console.warn('EmptyCart Called', action);
            data = []
            return [...data]

        default: return []
    }
}

export default Reducer