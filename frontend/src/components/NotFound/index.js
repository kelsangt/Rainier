import './NotFound.css'
import sadPuppy from '../../images/sadPuppy.jpeg'

const NotFound = props => {
    return (
        <>  
        <div id="notFoundDiv">
            <div id="notFoundDivInner">
                <h1 id="notFoundMessage">Sorry, we couldn't find that page</h1>
                <img src={sadPuppy} alt="sadPuppy" className="sadPuppyImage" /> 
            </div>
        </div>
        </>
    )
}

export default NotFound;