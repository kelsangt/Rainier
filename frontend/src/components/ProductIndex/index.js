import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from '../../store/products';
import ProductIndexItem from './ProductIndexItem';

const ProductIndex = props => {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllProducts())
    }, []);

   
    return(
        <>
        <div id="productsIndexDiv">
            <h1>Product</h1>
            <ul className='productsList'>
                {products.map((product) =>{
                    return (
                        <li key={product.id}>
                            <ProductIndexItem product={product}/>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default ProductIndex;