import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="aboutCon">
              <Navbar />
              <div className="darkAboutSubCon">
                <img
                  className="aboutImg"
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                />
                <h1 className="darkAboutH">About</h1>
              </div>
            </div>
          ) : (
            <div className="aboutCon">
              <Navbar />
              <div className="lightAboutSubCon">
                <img
                  className="aboutImg"
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                />
                <h1 className="lightAboutH">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
