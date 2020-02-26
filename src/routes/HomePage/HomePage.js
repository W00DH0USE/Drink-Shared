import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import './HomePage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  render() {
    return (
      <Section className='HomePage'>
        <div className='HomePage__Banner' role="banner">
          <h1>FIND THE PERFECT DRINK</h1>
          <h2>Learn how to make classic mixed drinks like whiskey sour, gin and tonic, old fashioned and more.</h2>
          <Link
            to='/register'
            className='Button HomePage-button'>
            Join Now!
          </Link>
        </div>
        <div className='HomePage__HowItWorks'>
          <h2 className=''>HOW IT WORKS</h2>
          <div className='HowItWorks-1'>
            <div className='HowItWorks__Text'>
              <h3>Recipes</h3>
              <p>Register and login and get directed to the recipes page. Here you will find a list of drink recipes that have been posted by our users. You'll be able to find recipes by name, type of drink and the user who posted it.</p>
            </div>
            <div className='HowItWorks__Screenshot'>
              <img src={require('./images/All Recipe Page.png')} alt='all-recipes-page-img'/>
            </div>
          </div>
          <div className='HowItWorks-2'>
            <div className='HowItWorks__Screenshot p1080-plus'>
              <img src={require('./images/Recipe Page.png')} alt='recipes-page-img'/>
            </div>
            <div className='HowItWorks__Text'>
              <h3>Recipe Information</h3>
              <p>
                Find a recipe that your interested in on the recipe page? Click on it to be taken to the recipe information page. Here you find all the information to make the recipe yourself.
                <br />
                What to know what other users thought? Scroll down and find a comments section.
                <br />
                What to leave your thoughts and feedback? Find a section to post a comment yourself at the bottom of the page.
              </p>
            </div>
            <div className='HowItWorks__Screenshot p1080-minus'>
              <img src={require('./images/Recipe Page.png')} alt='recipes-page-img'/>
            </div>
          </div>
          <div className='HowItWorks-3'>
          <div className='HowItWorks__Text'>
              <h3>Share Your Own Recipes</h3>
              <p>Have a (Not so secret) family recipe the world needs to know about? Click "Create Recipe" located at the top right side of the page. Here you can enter all the information other users need to make your recipe and post it to the recipes page.</p>
            </div>
            <div className='HowItWorks__Screenshot'>
              <img src={require('./images/Create a Recipe Page.png')} alt='create-a-recipe-page-img'/>
            </div>
          </div>
        </div>
        <footer className='HomePage__Footer'>
          <p className='HomePage__Footer__Text'>
            Created by
            <a href='http://www.iwoodhouse.net/' target='_blank' rel="noopener noreferrer"> Iyron Woodhouse</a> 
          </p>
          <div className='footer__social-media'>
            <a href="https://github.com/W00DH0USE" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='gold HomePage__Footer__Icon Github__Icon' icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/iyron-woodhouse-49973b122/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='gold HomePage__Footer__Icon Linkedin__Icon' icon={faLinkedin} />
            </a>
          </div>
          <p className='HomePage__Footer__Copyright'>Copyright © 2019 - All Rights Reserved</p>
        </footer>
      </Section>
    )
  }
}