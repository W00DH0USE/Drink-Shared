import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignInAlt, faUserPlus, faPencilAlt, faSignOutAlt, faThList  } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          className='left-a'
          to='/recipes'>
          <FontAwesomeIcon className='gold header-fa' icon={faThList} />
          {' '}
          Recipes
        </Link>
        <Link
          className='left-a'
          to='/create-article'>
          <FontAwesomeIcon className='gold header-fa' icon={faPencilAlt} />
          {' '}
          Create Recipe
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          <FontAwesomeIcon className='gold header-fa' icon={faSignOutAlt} />
          {' '}
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>

        <Link
          className='left-a'
          to='/register'>
          <FontAwesomeIcon className='gold header-fa' icon={faUserPlus} />
          {' '}
          Register
        </Link>
        <Link
          to='/login'>
          <FontAwesomeIcon className='gold header-fa' icon={faSignInAlt} />
          {' '}
          Login
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/' className='Header__Logo'>
            <img className='Drink-Shared__Logo header-fa' src={require('./Drink-Shared-logo-1.png')} alt='Drink-Shared-logo'/>
            {' '}
            Drink-Shared
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}
