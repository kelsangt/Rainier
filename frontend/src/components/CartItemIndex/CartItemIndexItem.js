import './CartItemIndexItem.css'
import { getProduct } from '../../store/products'
import { useSelector } from 'react-redux';

const CartItemIndexItem = (({cart_item})=> {
    const product = useSelector(getProduct(cart_item.productId));
    debugger 
    if (!product) return null;
    
    return (
        <div id="cartItemIndex" key={cart_item.id}>
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
                Ratings 
            </h1>
            <h1 id="indexProductPrice">
                ${product.price}
            </h1>
        </div>
    )
})

export default CartItemIndexItem;