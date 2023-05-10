import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from '../../store/products';
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import loading from '../../images/loading.gif';
import NotFound from '../NotFound';

const ProductIndex = props => {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();
    const [initialized, setInitialized] = useState(false);

    useEffect(()=>{
        dispatch(fetchAllProducts())
            .then(()=> setInitialized(true))
            .catch(()=> setInitialized(true));
    }, [dispatch]);


    const { categoryName } = useParams();

    if(!initialized){
        return <div id="loadingDiv">
            <img alt="loadingIcon" id="loadingIcon" src={loading}></img>
        </div>
    }

    if(categoryName !== "toysgames" && categoryName !== "fashion" && categoryName !== "books" && categoryName !== "electronics" && categoryName !== "homegoods" && categoryName !== "all"){
        return <NotFound />
    }

   
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