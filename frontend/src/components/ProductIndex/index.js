import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from '../../store/products';
import ProductIndexItem from './ProductIndexItem';
import './ProductIndex.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from '../NotFound';
import { fetchAllReviews } from '../../store/reviews';

const ProductIndex = props => {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllProducts())
        dispatch(fetchAllReviews())
    }, [dispatch]);

    const { categoryName } = useParams();

    if(categoryName !== "toysgames" && categoryName !== "fashion" && categoryName !== "books" && categoryName !== "electronics" && categoryName !== "homegoods" && categoryName !== "all"){
        return <NotFound />;
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