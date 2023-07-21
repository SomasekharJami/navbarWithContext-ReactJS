import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="darkHomeCon">
              <Navbar />
              <div className="darkHomeSubCon">
                <img
                  className="homeImg"
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                />
                <h1 className="darkHomeH">Home</h1>
              </div>
            </div>
          ) : (
            <div className="lightHomeCon">
              <Navbar />
              <div className="homeSubCon">
                <img
                  className="homeImg"
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                />
                <h1 className="lightHomeH">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
