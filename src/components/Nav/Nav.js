import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import SearchBar from '../App/SearchBar'



const Nav = (props) => (
  <div className="nav bg-dark m-auto">
    <Link className="nav-link text-white" to="/info">
      Mtg Confidant
    </Link>

    
    <Link className="nav-link text-white" to="/Checkout">Cart</Link>
    <Link className="nav-link text-white" to="/home">
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {props.user.id ? 'Logout' : 'Login / Register'}</Link>

    {/* Show the link to the info page and the logout button if the user is logged in */}
    {/* {props.user.id && (<>  <LogOutButton className="nav-link" /></>)} */}
    {/* <Link className="nav-link" to="/info">Info Page</Link>  */}

    {props.user.id && props.user.admin && (<Link className="nav-link text-white" to="/vieworders">View Orders</Link>)}
    {/* <span>{JSON.stringify(props.users)}</span> */}


    {/* Always show this link since the about page is not protected */}
    <Link className="nav-link text-white" to="/about">
      About
      </Link>
    <SearchBar />
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
