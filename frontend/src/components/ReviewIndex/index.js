import { getReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";
import './ReviewIndex.css';

const ReviewIndex = ({product}) => {
    // const reviews = useSelector(state => Object.values(state.reviews));


    const dispatch = useDispatch();
    if(!product.reviews){
        return null;
    }

    const reviews = Object.values(product.reviews);
   


    return (
        <div id="reviewsMainContainer">
            {reviews.map((review) => {
                if (review.productId === product.id) {
                    return (
                        <div id="review" key={review.id}>
                            <ReviewIndexItem review={review} />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ReviewIndex;