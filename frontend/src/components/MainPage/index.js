import './MainPage.css'
import earthDayImage from '../../images/earthDayImage.jpg'
import toysGamesDivImage from '../../images/toysGamesDivImage.png'
import homegoodsDivImage from '../../images/homegoodsDivImage.png'
import fashionDivImage from '../../images/fashionDivImage.png'
import electronicsDivImage from '../../images/electronicsDivImage.png'

const MainPage = props => {

    return (
        <>
        {/* <div id="fillerDiv"></div> */}
        <div id="bannerDiv">
            <img src={earthDayImage} alt="earthDayImage" className="earthDayImage" /> 
        </div>
        <div id="mainPageDiv">
            <div id="selectionsDiv">
                <div id="electronicsDiv">
                    <h1 id="electronicsH1">Shop the latest electronics</h1>
                    <a id="electronicsAnchor" href="/categories/electronics">
                        <img src={electronicsDivImage} alt="electronicsDivImage" className="electronicsDivImage" /> 
                    </a>
                </div>
                <div id="fashionDiv">
                    <h1 id="fashionH1">Elevate your wardrobe</h1>
                    <a id="fashionAnchor" href="/categories/fashion">  
                        <img src={fashionDivImage} alt="fashionDivImage" className="fashionDivImage" /> 
                    </a>
                </div>
                <div id="homegoodsDiv">
                    <h1 id="homegoodsH1">Liven up your home</h1>
                    <a id="homegoodsAnchor" href="/categories/homegoods">  
                        <img src={homegoodsDivImage} alt="homegoodsDivImage" className="homegoodsDivImage" /> 
                    </a>
                </div>
                <div id="toysgamesDiv">
                    <h1 id="toysGamesH1">Popular toys and games</h1>
                    <a id="toysgamesAnchor" href="/categories/toysgames">  
                        <img src={toysGamesDivImage} alt="toysGamesDivImage" className="toysGamesDivImage" /> 
                    </a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default MainPage;