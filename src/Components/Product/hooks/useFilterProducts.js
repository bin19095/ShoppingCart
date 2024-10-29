import fakeApi from "../../../api/fakeApi";
import  { useState, useEffect } from 'react';

 const useFilterProduct = (checkType) =>{
    const [products, setProducts ] = useState([]);
    const [status, setStatus ] = useState('idle');



useEffect(() =>{
    const fetchProducts = async () => {
        console.log("checkingType", checkType)
        setStatus('fetching');
        try {
            const endpoint = checkType ? `/products/${checkType}` : '/products';
            console.log("endPoint from hook", endpoint)
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