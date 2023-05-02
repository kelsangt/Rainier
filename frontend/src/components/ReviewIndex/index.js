import { getReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";

const ReviewIndex = ({product}) => {
    const reviews = useSelector(state => Object.values(state.reviews));

    const dispatch = useDispatch();

    return (
        <div>
            {reviews.map((review) => {
                if (review.productId === product.id) {
                    return (
                        <li id="review" key={review.id}>
                            <ReviewIndexItem review={review} />
                        </li>
                    )
                }
            })}
        </div>
    )
}

export default ReviewIndex;