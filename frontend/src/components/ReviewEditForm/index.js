import { useDispatch, useSelector } from "react-redux";
import { fetchReview, updateReview } from "../../store/reviews";
import { useState } from "react";
import '../ReviewCreationForm/ReviewCreationForm.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../NotFound";
import { getReview } from "../../store/reviews";
import loading from '../../images/loading.gif';


const ReviewEditForm = () => {
    const {reviewId} = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [initialized, setInitialized] = useState(false);
    const history = useHistory();
   


    useEffect(()=>{
        dispatch(fetchReview(reviewId))
            .then(()=> setInitialized(true))
            .catch(()=> setInitialized(true));
    }, [dispatch, reviewId])
    
    const review = useSelector(getReview(reviewId));

   
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [rating, setRating] = useState();

    if(!initialized){
        return <div id="loadingDiv">
            <img alt="loadingIcon" id="loadingIcon" src={loading}></img>
        </div>
    }


    if(!review || review.userId !== sessionUser.id){
        return <NotFound />
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
                    <img id="reviewImage" alt="reviewimage" src={review.product.photoUrl}></img>
                    <p id="productName">{review.product.name}</p>
                </div>
                <div id="reviewLine"></div>
                <label className="reviewLabel">
                    Rating
                    <select className="reviewInput" defaultValue = {review.rating} value={rating} onChange={(e) => setRating(e.target.value)} required>
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
                    defaultValue = {review.title}
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
                    defaultValue = {review.body}
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