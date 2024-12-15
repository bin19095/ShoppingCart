
import { createContext,  useState} from 'react';
import fakeApi from '../api/fakeApi';
const ProductContext = createContext();

function Provider({ children }){
    const [getProduct, setProduct ] = useState([]);
    const [query, setQuery ] = useState(null);
    console.log(query)

    // useEffect(() =>{
    //     const fetchingDetails = async() => {
    //       console.log('step1 useEffect')
    //       try{
    //         const endPoint = productId ? `/products/${productId}`  : '/products';
    //         console.log("endpoint", endPoint);
    //         const response = await fakeApi.get(endPoint);
    //         console.log("response from viewProduct", response.data)
    //         setProduct(response)
    //         console.log("fetched getProduct",getProduct);
    //       } catch(error) {
    //         console.error("Error fetching params Products",error);
    //       }
    //     }
    //     fetchingDetails();
     
    //   },[]);
    const handleCart = async (id) => {
        let count = 1;
        try{

            if(!id){
                return;
            }
            const response = await fakeApi.get(`/products/${id}`);
            console.log("response product to store", response.data);
            const newProduct = {...response.data, quantity: 1};
            // check if the product already exists in the cart
            const existingProductIndex = getProduct.findIndex((product) => product.id ===id);
            let updateCart;
            if(existingProductIndex !== -1){
                //means product already in the cart; increaste the quantity
                updateCart = getProduct.map((product, index) =>
                index === existingProductIndex ? {...product, quantity: product?.quantity + 1 }
                :product
            )
            }
            else {
                updateCart = [...getProduct, newProduct];
               
            }
            setProduct(updateCart);
        
        console.log("result getPrdocut",getProduct)
      
    } catch(error){
        console.log("problem fetching cart",error);
    };
        
        
       
    }

const valueToShare = {
    getProduct,
    handleCart,

};

return <ProductContext.Provider value={valueToShare}>
    {children}
</ProductContext.Provider>
}
export { Provider };
export default ProductContext;
