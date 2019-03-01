import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { Icon } from '../components/Icon'
import LangSwitcher from '../components/LangSwitcher'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {

     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {

         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');

       });
     });
   }
 }

 render() {
   return (

  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" to="/">
          <Icon title="Home" name="home" />  Home
        </Link>
        <Link className="navbar-item" to="/about">
          <Icon title="About" name="question" />  About
        </Link>
        <Link className="navbar-item" to="/products">
          <Icon title="Products" name="image" /> Products
        </Link>
        <Link className="navbar-item" to="/blog">
          <Icon title="Blog" name="pen-alt" /> Blog
        </Link>
        <Link className="navbar-item" to="/contact">
          <Icon title="Contact" name="american-sign-language-interpreting" /> Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
      </div>
      <div className="navbar-end has-text-centered">
        <LangSwitcher />
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
