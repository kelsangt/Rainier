import { useDispatch, useSelector } from "react-redux";
import NotFound from "../NotFound";
import './ReviewIndexItem.css';
import userIcon from '../../images/userIcon.png'
import { deleteReview } from "../../store/reviews";
import { useEffect } from "react";
import { fetchProduct, getProduct } from "../../store/products";

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const product = useSelector(getProduct(review.productId));
  

    const handleReviewDelete = (e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
    }
    
    let reviewItem;

    if(sessionUser && review.userId === sessionUser.id){
        reviewItem = (
            <>
            <div id="reviewShow">
                <div>
                    <img src={userIcon} alt="usericon" className="userIcon" /> 
                    {review.name}
                </div>
                <div id="ratingTitle">
                    {review.rating}
                    {review.title}
                </div>
                <div>{review.body}</div>
            </div>
            <button onClick={handleReviewDelete}>Delete</button>
            <div>
                <a href={`/editReview/${review.id}`}>
                    <button>Edit</button>
                </a>
            </div>
           
            </>
        )
        
    } else {
        reviewItem = (
            <>
            <div id="reviewShow">
                <div>
                    <img src={userIcon} alt="usericon" className="userIcon" /> 
                    {review.name}
                </div>
                <div id="ratingTitle">
                    {review.rating}
                    {review.title}
                </div>
                <div>{review.body}</div>
            </div>
            </>
        )
    }
    

    return (
        <>
        {reviewItem}
        </>
    )
}

export default ReviewIndexItem;