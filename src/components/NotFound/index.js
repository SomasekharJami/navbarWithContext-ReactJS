import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <div className="NotCon">
              <Navbar />
              <div className="darkNotCon">
                <img
                  className="notImg"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1 className="darkNotH">Lost Your Way?</h1>
                <p className="darkNotP">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </div>
          ) : (
            <div className="NotCon">
              <Navbar />
              <div className="lightNotCon">
                <img
                  className="notImg"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1 className="lightNotH">Lost Your Way?</h1>
                <p className="lightNotP">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
