import { useDispatch, useSelector } from "react-redux";
import './ReviewIndexItem.css';
import userIcon from '../../images/userIcon.png'
import { deleteReview } from "../../store/reviews";

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
  

    const handleReviewDelete = (e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id));
    }
    
    let reviewItem;

    let stars = [];

    for(let i = 0; i < review.rating; i++){
        stars.push(<i id="starIcon" className="fa fa-star"></i>);
    }

    let reviewRemainder = 5 - review.rating;

    for(let j = 0; j < reviewRemainder; j++){
        stars.push(<i id="starIcon" className="fa fa-star-o"></i>);
    }


    if(sessionUser && review.userId === sessionUser.id){
        reviewItem = (
            <>
            <div id="reviewShow">
                <div id="userInfoDiv">
                    <img src={userIcon} alt="usericon" className="userIcon" /> 
                    <h1 id="reviewNameH1">{review.name}</h1>
                </div>
                <div id="ratingTitle">
                    <h1>{stars}</h1>
                    <h1 id="reviewTitleH1">{review.title}</h1>
                </div>
                <div id="verifiedPurchaseDiv">
                    <h1>Verified Purchase</h1>
                </div>
                <div id="reviewBodyDiv">{review.body}</div>
                <div id="reviewButtons">
                    <a href={`/editReview/${review.id}`}>
                        <button id="editReviewButton">Edit</button>
                    </a>
                    <button id="deleteReviewButton" onClick={handleReviewDelete}>Delete</button>
                </div>
            </div>
            </>
        )
        
    } else {
        reviewItem = (
            <>
            <div id="reviewShow">
                <div id="userInfoDiv">
                    <img src={userIcon} alt="usericon" className="userIcon" /> 
                    <h1 id="reviewNameH1">{review.name}</h1>
                </div>
                <div id="ratingTitle">
                    <h1>{stars}</h1>
                    <h1 id="reviewTitleH1">{review.title}</h1>
                </div>
                <div id="verifiedPurchaseDiv">
                    <h1>Verified Purchase</h1>
                </div>
                <div id="reviewBodyDiv">{review.body}</div>
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