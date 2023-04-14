import './Footer.css'

const Footer = props => {
    return(
        <div id="footerDiv">
            <div id="fillerDiv2"></div>
            <div id="footerText">
                <h1 id="myName">Made by Kelsang Tsering</h1>
                <div id="footerLinks">
                    <a href="https://github.com/kelsangt/Rainier">
                        <i className="fa fa-github" id="githubLink"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kelsang-tsering/">
                        <i className="fa fa-linkedin" id="linkedIn"></i>
                    </a>
                </div>
                <h2 id="credits">This site uses images from the following companies: Amazon, Shutterstock, Under Armour, and LG. All images belong to said companies.</h2>
            </div>
           
        </div>
    )
}

export default Footer;