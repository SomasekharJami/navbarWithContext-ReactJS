import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="lightNavCon">
              <img
                className="navImg"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
              <ul className="navList">
                <li className="navTab">
                  <Link to="/" className="lightNavLink">
                    Home
                  </Link>
                </li>
                <li className="navTab">
                  <Link to="/about" className="lightNavLink">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="themeBton"
                data-testid="theme"
                onClick={toggleTheme}
              >
                <img
                  className="themeImg"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="darkNavCon">
              <img
                className="navImg"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
              <ul className="navList">
                <li className="navTab">
                  <Link to="/" className="darkNavLink">
                    Home
                  </Link>
                </li>
                <li className="navTab">
                  <Link to="/about" className="darkNavLink">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="themeBton"
                data-testid="theme"
                onClick={toggleTheme}
              >
                <img
                  className="themeImg"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
