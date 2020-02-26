import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee, faCocktail, faBeer, faGlassWhiskey, faGlassCheers  } from '@fortawesome/free-solid-svg-icons'

const styleIconMap = {
  'Beer Cocktail': <FontAwesomeIcon className='red' icon={faBeer} />,
  'Cider': <FontAwesomeIcon className='red' icon={faBeer} />,
  'Cocktail': <FontAwesomeIcon className='blue' icon={faCocktail} />,
  'Coffee Drinks': <FontAwesomeIcon className='orange' icon={faCoffee} />,
  'Hot Chocolate': <FontAwesomeIcon className='orange' icon={faCoffee} />,
  'Liqueurs': <FontAwesomeIcon className='green' icon={faGlassWhiskey} />,
  'Mocktail': <FontAwesomeIcon className='blue' icon={faCocktail} />,
  'Mulled Wine': <FontAwesomeIcon className='yellow' icon={faGlassCheers} />,
  'Shots': <FontAwesomeIcon className='green' icon={faGlassWhiskey} />,
  'Shakes': <FontAwesomeIcon className='orange' icon={faCoffee} />,
  'Smoothies': <FontAwesomeIcon className='orange' icon={faCoffee} />,
  'Tea Drinks': <FontAwesomeIcon className='orange' icon={faCoffee} />,
  'default': null
}

export default function StyleIcon({ style='default' }) {
  return styleIconMap[style]
}
