import React, { Component } from 'react'
import { Button, Input, Textarea } from '../Utils/Utils'
import ArticleApiService from '../../services/article-api-service'

class CreateArticleForm extends Component {

  state = { error: '' }

  handleSubmit = ev => {
    ev.preventDefault()
    const { title, style, ingredients, directions,  } = ev.target

    this.setState({ error: null })
    ArticleApiService.postArticle({
      title: title.value,
      style: style.value,
      ingredients: ingredients.value,
      directions: directions.value,
    })
      .then(article => {
        title.value = ''
        style.value = ''
        ingredients.value = ''
        directions.value = ''
        this.props.history.push('/recipes');
      })
      .catch(article => {
        this.setState({ error: article.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='CreateArticleForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error !== '' ? <p className='red'>{error}</p> : null}
        </div>
        <div className='title'>
          <Input
            name='title'
            type='text'
            required
            id='CreateArticleForm__title'
            placeholder='Name of recipe'>
          </Input>
        </div>
        <div className='style'>
          <select name='style' id='CreateArticleForm__style'>
            <option value="Beer Cocktail">Beer Cocktail</option>
            <option value="Cider">Cider</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Coffee Drinks">Coffee Drinks</option>
            <option value="Hot Chocolate">Hot Chocolate</option>
            <option value="Liqueurs">Liqueurs</option>
            <option value="Mocktail">Mocktail</option>
            <option value="Mulled Wine">Mulled Wine</option>
            <option value="Shots">Shots</option>
            <option value="Shakes">Shakes</option>
            <option value="Smoothies">Smoothies</option>
            <option value="Tea Drinks">Tea Drinks</option>
          </select>
        </div>
        <div className='ingredients'>
          <Textarea
            required
            aria-label='ingredients'
            name='ingredients'
            id='CreateArticleForm__ingredients'
            cols='30'
            rows='5'
            placeholder='Recipe ingredients...'>
          </Textarea>
        </div>
        <div className='directions'>
          <Textarea
            required
            aria-label='directions'
            name='directions'
            id='CreateArticleForm__directions'
            cols='30'
            rows='5'
            placeholder='Recipe directions...'>
          </Textarea>
        </div>
        <Button type='submit' className='createArticle-button'>
          Create!
        </Button>
      </form>
    )
  }
}

export default CreateArticleForm;