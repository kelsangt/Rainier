import { useState } from "react"
import './ProductIndexItem.css'

const ProductIndexItem = (({product}) => {
    return (
        <div id="productIndex" key={product.id}>
            <ul>
                <li>
                    <h3>
                        Name: {product.name}
                    </h3>
                </li>
                <li>
                    <h3>
                        Category: {product.category}
                    </h3>
                </li>
                <li>
                    <h3>
                        Price: {product.price}
                    </h3>
                </li>
                <li>
                    <h3>
                        Description: {product.description}
                    </h3>
                </li>
            </ul>
        </div>
    )
})

export default ProductIndexItem