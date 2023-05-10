import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchAllReviews, fetchReview, updateReview } from "../../store/reviews";
import { useState } from "react";
import '../ReviewCreationForm/ReviewCreationForm.css';
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProduct } from "../../store/products";
import { fetchProduct } from "../../store/products";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../NotFound";
import { getReview } from "../../store/reviews";

const ReviewEditForm = () => {
    const {reviewId} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [initialized, setInitialized] = useState(false);
    const history = useHistory();
   


    useEffect(()=>{
        dispatch(fetchReview(reviewId)).then(()=>setInitialized(true));
    }, [reviewId])
    
    const review = useSelector(getReview(reviewId));

    const [title, setTitle] = useState(review?.title);
    const [body, setBody] = useState(review?.body);
    const [rating, setRating] = useState(review?.rating);

    if(!review){
        return null;
    }

    const userId = review.userId;
    const productId = review.productId;
    const id = review.id;



    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(updateReview({id, title, body, rating, userId, productId}));
        history.push(`/products/${productId}`);
    }

    return (
        <div id="reviewCreationFormMain">
            <form id="reviewForm" onSubmit={updateHandler}>
                {/* <div>
                    <ul>
                        {errors.map(error => <li id="loginError" key={error}>{error}</li>)}
                    </ul>
                </div> */}
                <div id="createReviewMain">Edit Review</div>
                <div id="productInfo">
                    <img id="reviewImage" alt="reviewimage" src={review.photoUrl}></img>
                    <p id="productName">{review.name}</p>
                </div>
                <div id="reviewLine"></div>
                <label className="reviewLabel">
                    Rating
                    <select className="reviewInput" value={rating} onChange={(e) => setRating(e.target.value)} required>
                        <option value="" disabled selected>Please select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <div id="reviewLine"></div>
                <label className="reviewLabel">
                    Add a headline
                    <input 
                    className="reviewInput"
                    type="string"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's most important to know?"
                    required
                    />
                </label>
                <div id="reviewLine"></div>
                <label className="reviewLabel">
                    Add a written review
                    <textarea 
                    id="reviewBody"
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="What did you like or dislike? What did you use this product for?"
                    required
                    />
                </label>
                <div id="reviewLine"></div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewEditForm;