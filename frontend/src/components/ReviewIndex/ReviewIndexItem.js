import { useDispatch } from "react-redux";
import NotFound from "../NotFound";
import './ReviewIndexItem.css';
import userIcon from '../../images/userIcon.png'

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    return (
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

export default ReviewIndexItem;