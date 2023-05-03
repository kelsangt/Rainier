// import { useState } from "react"
import './ProductIndexItem.css'
import primeLogo from '../../images/primeLogo.png'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from '../NotFound/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllReviews } from '../../store/reviews';

const ProductIndexItem = (({product}) => {
    const { categoryName } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllReviews());
    }, [dispatch])

    const reviews = useSelector(state => Object.values(state.reviews));

    let reviewsSum = 0;
    let reviewsCount = 0;

    reviews.forEach(review => {
        if(review && product){
            if(review.productId === product.id) {
                reviewsSum += review.rating;
                reviewsCount += 1;
            }
        }
    })

    let reviewsAverage = reviewsSum / reviewsCount;

    

    if(!product.category){
        return <NotFound />
    }
    
    if((product.category !== categoryName) && (categoryName !== "all")){
        return null;
    }


    
    return (
        <div id="productIndex" key={product.id}>
            <a id="productShowAnchor" href={`/products/${product.id}`}>
                <div id="indexImageDiv">
                    <img id="indexImage" src={product.photoUrl} alt=""/>
                </div>
            </a>
            <a id="productShowAnchor" href={`/products/${product.id}`}>
                <h1 id="indexProductName">
                    {product.name}
                </h1>
            </a>
            <h1 id="indexProductReview">
                {reviewsAverage} 
            </h1>
            <h1 id="indexProductPrice">
                ${product.price}
            </h1>
            <img src={primeLogo} alt="primeLogo" className="primeLogoImage" /> 
        </div>
    )
})

export default ProductIndexItem