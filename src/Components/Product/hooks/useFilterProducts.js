import fakeApi from "../../../api/fakeApi";
import  { useState, useEffect } from 'react';

 const useFilterProduct = (checkType) =>{
    const [products, setProducts ] = useState([]);
    const [status, setStatus ] = useState('idle');



useEffect(() =>{
    const fetchProducts = async () => {
        setStatus('fetching');
        try {
            const endpoint = checkType ? `/products/${checkType}` : '/products';
          
            const response = await fakeApi.get(endpoint);
            setProducts(response);
            setStatus('fetched');
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    fetchProducts();
}, [checkType])

console.log("hook results",products)
return {status,products};
}

export default useFilterProduct;
