import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProduct, getProduct } from "../../store/products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const ProductShow = () => {
    const { productId } = useParams();
    const product = useSelector(getProduct(productId));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    if(!product) return null;

    return (
        <>
        <div>
            <h1>{product.name}</h1>
            <img id="indexImage" src={product.photoUrl} alt=""/>
            <h1>{product.price}</h1>
        </div>
        </>
    )

}

export default ProductShow;