import { useDispatch } from "react-redux";
import NotFound from "../NotFound";

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    // if(review.productId !== product.id) {
    //     return null;
    // }

    return (
        <>
            <div>{review.title}</div>
        </>
    )
}

export default ReviewIndexItem;