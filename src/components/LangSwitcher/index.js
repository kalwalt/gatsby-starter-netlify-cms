import React from 'react'
import { Link } from 'gatsby'
import en from '../../../static/img/en_gb.gif'
import it from '../../../static/img/it_it.gif'
/*
class LangSwitcher extends React.Component {
  render() {
    const { location, title, slug } = this.props
    return (
      <ul className="navbar-item">
        <li className="">
          <Link className="navbar-item">
            <img src={en} href="{site}/en/{slug}" alt="en website" className="Logo" />
          </Link>
        </li>
        <li className="">
          <Link className="navbar-item">
            <img src={it} href="{site}/it/{slug}" alt="it website" className="Logo" />
          </Link>
        </li>
      </ul>
    )
  }
}
*/

const LangSwitcher = ({slug}) => (

  <ul className="navbar-item">
    <li className="">
      <Link className="navbar-item" to="/en/{slug}">
        <img src={en} alt="en website" className="Logo" />
      </Link>
    </li>
    <li className="">
      <Link className="navbar-item" to="/it/{slug}">
        <img src={it} alt="it website" className="Logo" />
      </Link>
    </li>
  </ul>

)

export default LangSwitcher
