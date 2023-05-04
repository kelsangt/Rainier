import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useState } from "react";
import './ReviewCreationForm.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProduct } from "../../store/products";
import { fetchProduct } from "../../store/products";
import { useEffect } from "react";
import NotFound from "../NotFound";

const ReviewCreationForm = () => {
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");
    // const [errors, setErrors] = useState([]);

    useEffect(()=>{
        dispatch(fetchProduct(productId));
        // dispatch(fetchAllReviews());
    }, [dispatch, productId])
   
    if (!product || !sessionUser){
        return <NotFound/>;
    }

    const userId = sessionUser.id;

    const formHandler = (e) => {
        e.preventDefault();
        // setErrors([]);
        return dispatch(createReview({title, body, rating, userId, productId}))
            // .catch(async (res) => {
            //     let data;
            //     try {
            //         data = await res.clone().json();
            //     } catch {
            //         data = await res.text(); 
            //     }
            //     if (data?.errors) setErrors(data.errors);
            //     else if (data) setErrors([data]);
            //     else setErrors([res.statusText]);
            // });
    }

    return (
        <div id="reviewCreationFormMain">
            <form id="reviewForm" onSubmit={formHandler}>
                {/* <div>
                    <ul>
                        {errors.map(error => <li id="loginError" key={error}>{error}</li>)}
                    </ul>
                </div> */}
                <div id="createReviewMain">Create Review</div>
                <div id="productInfo">
                    <img id="reviewImage" src={product.photoUrl}></img>
                    {product.name}
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

export default ReviewCreationForm;