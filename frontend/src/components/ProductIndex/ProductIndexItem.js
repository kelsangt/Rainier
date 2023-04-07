// import { useState } from "react"
import './ProductIndexItem.css'

const ProductIndexItem = (({product}) => {
    return (
        <div id="productIndex" key={product.id}>
            
            <ul>    
                <li>
                    <img id="indexImage" src={product.photoUrl} alt=""/>
                </li>
                <li>
                    <h3>
                       {product.name}
                    </h3>
                </li>
                <li>
                    <h3>
                        ${product.price}
                    </h3>
                </li>
                
                
            </ul>
        </div>
    )
})

export default ProductIndexItem