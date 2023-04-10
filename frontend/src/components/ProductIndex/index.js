import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from '../../store/products';
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';

const ProductIndex = props => {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllProducts())
    }, [dispatch]);

   
    return(
        <>
        <div id="fillerDiv"></div>
        <div id="productsIndexDiv">
            <ul id="productsIndexList" className='productsList'>
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