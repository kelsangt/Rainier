import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useState } from "react";

const ReviewCreationForm = ({product}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");
    const userId = sessionUser.id;
    const productId = product.id;
    const [errors, setErrors] = useState([]);

   

    const formHandler = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(createReview({title, body, rating, userId, productId}))
            .catch(async (res) => {
                let data;
                try {
                data = await res.clone().json();
                } catch {
                data = await res.text(); 
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                {/* <div id="errors">
                    <ul id="signupErrors">
                        {errors}
                    </ul>
                </div> */}
                <label>
                    Title
                    <input 
                    type="string"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Body
                    <input 
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <label>
                    Rating
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
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