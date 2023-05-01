import './ItemsNotFound.css'
import sadPuppy from '../../images/sadPuppy.jpeg'

const ItemsNotFound = props => {
    return (
        <>  
        <div id="notFoundDiv">
            <div id="notFoundDivInner">
                <h1 id="notFoundMessage">Sorry, we couldn't find those items</h1>
                <img src={sadPuppy} alt="sadPuppy" className="sadPuppyImage" /> 
            </div>
        </div>
        </>
    )
}

export default ItemsNotFound;