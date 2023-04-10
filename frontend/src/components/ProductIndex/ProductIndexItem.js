// import { useState } from "react"
import './ProductIndexItem.css'
import primeLogo from '../../images/primeLogo.png'

const ProductIndexItem = (({product}) => {
    return (
        <div id="productIndex" key={product.id}>
            <div id="indexImageDiv">
                <img id="indexImage" src={product.photoUrl} alt=""/>
            </div>
            
            <h1 id="indexProductName">
                {product.name}
            </h1>
            <h1 id="indexProductReview">
                Ratings 
            </h1>
            <h1 id="indexProductPrice">
                ${product.price}
            </h1>
            <img src={primeLogo} alt="primeLogo" className="primeLogoImage" /> 
        </div>
    )
})

export default ProductIndexItem