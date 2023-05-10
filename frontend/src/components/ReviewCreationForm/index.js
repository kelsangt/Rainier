import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useState } from "react";
import './ReviewCreationForm.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProduct } from "../../store/products";
import { fetchProduct } from "../../store/products";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../NotFound";
import loading from '../../images/loading.gif';

const ReviewCreationForm = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");
    const [initialized, setInitialized] = useState(false);
    // const [errors, setErrors] = useState([]);

    useEffect(()=>{
        dispatch(fetchProduct(productId))
            .then(()=> setInitialized(true))
            .catch(()=> setInitialized(true));
    }, [dispatch])

    const product = useSelector(getProduct(productId));

   
    if(!initialized){
        return <div id="loadingDiv">
            <img alt="loadingIcon" id="loadingIcon" src={loading}></img>
        </div>
    }

    if (!product || !sessionUser) {
        return <NotFound />
    }


    const userId = sessionUser.id;

    const formHandler = (e) => {
        e.preventDefault();
        // setErrors([]);
        dispatch(createReview({title, body, rating, userId, productId}));
        history.push(`/products/${productId}`);
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
                    <img id="reviewImage" alt="reviewimage" src={product.photoUrl}></img>
                    <p id="productName">{product.name}</p>
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