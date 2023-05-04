import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useState } from "react";
import './ReviewCreationForm.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ReviewCreationForm = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");
    const userId = sessionUser.id;
    // const productId = product.id;
    // const [errors, setErrors] = useState([]);

   

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
                <label>
                    Title
                    <input 
                    type="string"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Body
                    <input 
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Rating
                    <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                        <option value="" disabled selected>Please select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                
                <button type="submit">Create Review</button>
            </form>
        </div>
    )
}

export default ReviewCreationForm;