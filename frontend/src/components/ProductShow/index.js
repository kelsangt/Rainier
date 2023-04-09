import { useParams } from "react-router-dom";
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

    return (
        <h1>{product.name}</h1>
    )

}

export default ProductShow;